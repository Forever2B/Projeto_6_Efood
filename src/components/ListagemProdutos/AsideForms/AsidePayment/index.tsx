import { AsidesProps } from '..';
// Styles
import * as s from './styles';
// Contexto
import { useCarrinho } from '../../../../Contexts/ContextCarrinho';
//

export function AsidePayment({setarAside}: AsidesProps) {
        const { pedidos, limparCarrinho } = useCarrinho();
        
        const totalEmCentavos = pedidos.reduce((acc, p) => {
            const valor = Math.round(Number(p.preco) * 100);
            return acc + valor;
          }, 0);
          
        const totalPrice = totalEmCentavos / 100;
          
          
        const formatarPreco = (valor: number) => {
            return new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2
            }).format(valor);
          };


    const handleClick = (asidepage:string) => {
        if (asidepage === 'FINISH'){ limparCarrinho() }
        setarAside(asidepage);
    }

    return (
        <s.AsidePaymentContainer>
            <s.AsidePaymentForm>
            <span className='title'>Pagamento - Valor a pagar R$ {formatarPreco(totalPrice)}</span>
            <div className='divsLabelXinput'>
                <label htmlFor="CarName">Nome no cartão</label>
                <input type="string" id="CardName"required />
            </div>
            <div className="divsLabelXinput" style={{ flexDirection: 'row' }}>
                <div className="input-group-bigger">
                    <label htmlFor="NumberCard">Numero Do Cartão</label>
                    <input type="number" id="NumberCard" required />
                </div>
                <span className='space30'></span>
                <div className="input-group-small">
                    <label htmlFor="CVV">CVV</label>
                    <input type="number" id="CVV" required />
                </div>
            </div>
            <div className="divsLabelXinput" style={{ flexDirection: 'row' }}>
                <div className="input-group">
                    <label htmlFor="MesVenc">Mes de vencimento</label>
                    <input type="number" id="MesVenc" required />
                </div>
                <span className='space34'></span>
                <div className="input-group">
                    <label htmlFor="Year">Ano de vencimento</label>
                    <input type="Number" id="Year" required />
                </div>
            </div>
            </s.AsidePaymentForm>
            <br />
            <button className='buttonStyle' type='button' onClick={() => handleClick('FINISH')}>Finalizar pagamento</button>
            <button className='buttonStyle' type='button' onClick={() => handleClick('FORM')}>Voltar para a edição de endereço</button>
        </s.AsidePaymentContainer>
    )
}