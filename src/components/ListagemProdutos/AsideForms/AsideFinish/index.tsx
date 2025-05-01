import { useEffect } from 'react';
import { AsidesProps } from '..';
// Contexts
import { useUI } from '../../../../Contexts/UIContext';
import { useApi } from '../../../../Contexts/ApiContext';
import { useCarrinho } from '../../../../Contexts/ContextCarrinho';
// Styles
import * as s from './styles';
//

export function AsideFinish({setarAside}: AsidesProps) {
    const { fecharCarrinho} = useUI();
    const { limparCarrinho, toggleLimpeza, ligarLimpezaDeDados  } = useCarrinho();
    const {limparOrderInformations } = useApi();

    const makeID = (tamanho = 6) => {
        let id = '';
        const numeros = '0123456789';
      
        while (id.length < tamanho) {
          const digito = Math.floor(Math.random() * 10);
          id += numeros[digito];
        }
      
        return id;
      };
    const OrderID = makeID();

    const handleClick = () => {
        setarAside('CARRINHO');
        fecharCarrinho()
    }

    useEffect(() => {
        if (toggleLimpeza) {
            console.log('Iniciando limpeza de dados locais...')
            limparOrderInformations()
            ligarLimpezaDeDados()
            limparCarrinho()
        }
    }, [toggleLimpeza]);
    
    return (
        <>
            <s.AsideFinishContainer>
                <div>Pedido realizado! n: {OrderID}</div>
                <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
                <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </p>
                <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            </s.AsideFinishContainer>
            <s.CustomButtom onClick={() => handleClick()} className='buttonStyle'>Finalizar</s.CustomButtom>
        </>
    )
}