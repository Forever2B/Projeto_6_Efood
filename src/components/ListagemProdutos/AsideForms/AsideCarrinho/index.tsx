
import { AsidesProps } from '..';
// Styles
import * as s from './styles'
// assets
import lixeiraImgSrc from '../../../../assets/lixeira.png'
// context e api
import { useCarrinho } from '../../../../Contexts/ContextCarrinho';
//

export function AsideCarrinho({setarAside}: AsidesProps) {
  const { pedidos, removerPedido } = useCarrinho();


  const totalEmCentavos = pedidos.reduce((acc, p) => {
      const valor = Math.round(Number(p.preco) * 100);
      return acc + valor;
    }, 0);
    
  const totalPrice = totalEmCentavos / 100;
    
    
  const formatarPreco = (valor: number | undefined) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      }).format(valor ?? 0);
    };
    
  return (
      <s.ContainerCarrinho>
          <ul>
          {pedidos.map((p, i) => {
            return(
              <s.CardContainer key={`${p.id}-${i}`}>
              <img src={p.foto} />
              <div className="cardContent">
                  <span className="titleProductCard">{p.nome}</span>
                  <span className="priceProductCard">R$ {formatarPreco(p.preco)}</span>
                  <button type="button" onClick={() => removerPedido(i)}>
                  <img src={lixeiraImgSrc} />
                  </button>
              </div>
              </s.CardContainer>
            )})}
          </ul>
          <span className='spanSpacing'>
              <div>Valor total</div><div>{formatarPreco(totalPrice)}</div>  
          </span>
          <button onClick={() => setarAside('FORM')} className='buttonStyle'>Continuar com a entrega</button>
      </s.ContainerCarrinho>
  )
}