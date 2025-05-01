//Styles
import * as s from './style'
// APi e Contextos
import { useCarrinho } from '../../../Contexts/ContextCarrinho';
import { useApi } from '../../../Contexts/ApiContext';
//

type FilhoProps = {
    isAtiveSend: (valor: boolean) => void;
};

export function ModalProduto({isAtiveSend}: FilhoProps) {
    const { ItemAPI } = useApi()
    const { adicionarPedido } = useCarrinho();

    const handleClickADD = () => {
        adicionarPedido({
                id: ItemAPI?.id,
                nome: ItemAPI?.nome,
                preco: ItemAPI?.preco,
                foto: ItemAPI?.foto});
        isAtiveSend(false);
    };
    const handleClickCancel = () => {
        isAtiveSend(false);
    };

    const formatarPreco = (valor: number | undefined) => {
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2
        }).format(valor ?? 0);
      };

    return (
        <s.ProductModalContainer onClick={handleClickCancel}>
            <s.CardModal onClick={(e) => e.stopPropagation()}>
                <img src={ItemAPI?.foto} alt={ItemAPI?.nome} />
                <s.ContainerTextModal>
                    <h3>{ItemAPI?.nome}</h3>
                    <div>
                        <p className='spacing'>{ItemAPI?.descricao}</p>
                        <p>Serve {ItemAPI?.porcao}</p>
                    </div>
                    <button type='button' onClick={handleClickADD} className='buttonStyle'>
                        Adicionar ao carrinho - {formatarPreco(ItemAPI?.preco)}
                    </button>
                </s.ContainerTextModal>
            </s.CardModal>
        </s.ProductModalContainer>
    )
}