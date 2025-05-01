import { Api_Type_Entrega, Api_Type_Items, Api_Type_Order, Api_Type_Pagamento, enviarPedido } from "../api";
import { formDelivery_type } from "../components/ListagemProdutos/AsideForms/AsideForm";
import { formPayment_type } from "../components/ListagemProdutos/AsideForms/AsidePayment";



 export const DeliveryLogic = {
    criarDelivery: (
        form: formDelivery_type | undefined,
        setDelivery: (arg: Api_Type_Entrega) => void,
    ) => {
      if (!form) {return;}    
      const tempDelivery: Api_Type_Entrega = {
        receiver: form.values.name,
        address: {
          description: form.values.address,
          city: form.values.city,
          zipcode: Number(form.values.cep),
          number: Number(form.values.tell),
          complement: form.values.compl || undefined
        }
      };
console.log('tempdelivery')
console.log(tempDelivery)   // -------------------------------------------------
      setDelivery(tempDelivery);
    },
    criarPayment: (
        form: formPayment_type | undefined,
        setPayment: (arg: Api_Type_Pagamento) => void,
    ) => {
      if (!form) {return;}
      const tempPayment: Api_Type_Pagamento = {
        card: {
            name: form.values.CardName,
            number: form.values.NumberCard as unknown as number,
            code: form.values.CVV as unknown as number,
            expires: {
                month: form.values.MesVenc as unknown as number,
                year: form.values.Year as unknown as number,
            }}}
console.log('tempPayment')
console.log(tempPayment) // -------------------------------------------------
      setPayment(tempPayment);
    },
  
    completarCompra: async (
      Products: Api_Type_Items[] | null,
      Delivery: Api_Type_Entrega | null,
      Payment: Api_Type_Pagamento | null,
      ligarLimpezaDeDados: () => void,
    ): Promise<boolean> => {
      const novoOrder: Api_Type_Order = {
        products: Products,
        delivery: Delivery,
        payment: Payment,
      };
    
      console.log('Tentando fazer o envio do pedido:');
      console.log(novoOrder);
    
      console.log(JSON.stringify(novoOrder))
      const [sucesso] = await enviarPedido(novoOrder);
    
      if (sucesso) {
        ligarLimpezaDeDados();
        return true;
      } else {
        alert('Algo deu errado no envio do pedido. Tente novamente!');
        return false;
      }
    }    
};