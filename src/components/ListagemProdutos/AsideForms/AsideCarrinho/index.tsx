
import { AsidesProps } from '..';
import { useCarrinho } from '../../../../Contexts/ContextCarrinho';
// Styles
import * as s from './styles'
// assets
import lixeiraImgSrc from '../../../../assets/lixeira.png'
// context e api
//

export function AsideCarrinho({setarAside}: AsidesProps) {


  const { pedidos, removerPedido } = useCarrinho();


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
    
    const handleClick = () => {
        setarAside('FORM');
    }
    
    
  return (
      <s.ContainerCarrinho>
          <ul>
          {pedidos.map(p => { 
            console.log(p)
            return(
              <s.CardContainer key={p.id}>
              <img src={p.foto} />
              <div className="cardContent">
                  <span className="titleProductCard">{p.nome}</span>
                  <span className="priceProductCard">R$ {p.preco}</span>
                  <button type="button" onClick={() => removerPedido(p.id)}>
                  <img src={lixeiraImgSrc} />
                  </button>
              </div>
              </s.CardContainer>
            )})}
          </ul>
          <span className='spanSpacing'>
              <div>Valor total</div><div>R$ {formatarPreco(totalPrice)}</div>  
          </span>
          <button onClick={() => handleClick()} className='buttonStyle'>Continuar com a entrega</button>
      </s.ContainerCarrinho>
  )
}