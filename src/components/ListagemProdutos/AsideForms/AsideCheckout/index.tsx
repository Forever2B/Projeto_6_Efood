import { useEffect } from 'react';
import { AsidesProps } from '..'
import { Api_Type_Entrega, Api_Type_Items, Api_Type_Pagamento } from '../../../../api'
import { useApi } from '../../../../Contexts/ApiContext';
import { useCarrinho } from '../../../../Contexts/ContextCarrinho';

// Services
import { DeliveryLogic } from '../../../../services/sendOrder';
// Estilos
import { ContainerCheckout } from './styles'
//

export function AsideCheckOut({setarAside}: AsidesProps) {
    const { pedidos, ligarLimpezaDeDados, tempPaymentForm, tempAddressForm } = useCarrinho();
    const { setProducts, setPayment, setDelivery } = useApi();

    const executarCheckout = async () => {
        const tempOrders: Api_Type_Items[] = pedidos.map(p => ({
          id: p.id,
          price: p.preco
        }));
      
        if (!tempAddressForm) return;
        const tempDelivery: Api_Type_Entrega = {
          receiver: tempAddressForm.values.name,
          address: {
            description: tempAddressForm.values.address,
            city: tempAddressForm.values.city,
            zipcode: Number(tempAddressForm.values.cep),
            number: Number(tempAddressForm.values.tell),
            complement: tempAddressForm.values.compl || undefined
          }
        };
      

        if (!tempPaymentForm) return;
        const tempPayment: Api_Type_Pagamento = {
          card: {
            name: tempPaymentForm.values.CardName,
            number: tempPaymentForm.values.NumberCard as unknown as number,
            code: tempPaymentForm.values.CVV as unknown as number,
            expires: {
              month: tempPaymentForm.values.MesVenc as unknown as number,
              year: tempPaymentForm.values.Year as unknown as number,
            }
          }
        };
      
        setProducts(tempOrders);
        setDelivery(tempDelivery);
        setPayment(tempPayment);
      
        const sucesso = await DeliveryLogic.completarCompra(
          tempOrders,
          tempDelivery,
          tempPayment,
          ligarLimpezaDeDados
        );
      
        if (sucesso) {
            setarAside('FINISH');
          } else {
            setarAside('PAYMENT');
          }          
      };
      
      
      



    useEffect(() => {
        executarCheckout();
      }, []);
    return (
        <ContainerCheckout>
            <h4>Conferindo seus dados:</h4>
            <p>porfavor aguarde um momento enquanto estamos finalizamos o seu pedido.</p>
            <p className='swingAnimation'>Carregando . . .</p>
        </ContainerCheckout>
    )
}