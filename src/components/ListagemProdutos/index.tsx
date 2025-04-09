import { CardsProdutos } from './cards'

// Estilos
import * as s from './styles'
import { ListagemContainer } from '../../GlobalStyle'
//

export const Products = () => {
    return (
        <ListagemContainer>
            <s.CardsDivTrio>
                <CardsProdutos />
                <CardsProdutos />
                <CardsProdutos />
                <CardsProdutos />
                <CardsProdutos />
                <CardsProdutos />
            </s.CardsDivTrio>
        </ListagemContainer>
    )
}
