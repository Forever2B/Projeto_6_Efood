import { useState } from 'react'

// Componentes
import { CardsProdutos } from './cards'
import { ModalProduto } from './ModalProduto'

// Estilos
import * as s from './styles'
import { ListagemContainer } from '../../GlobalStyle'
//

export const Products = () => {
    const [isAtive, setIsAtive] = useState(false)

    return (
        <>
        {isAtive ? (<ModalProduto isAtiveSend={setIsAtive}/>): ''}
        <ListagemContainer>
            <s.CardsDivTrio>
                <CardsProdutos isAtiveSend={setIsAtive} />
                <CardsProdutos isAtiveSend={setIsAtive} />
                <CardsProdutos isAtiveSend={setIsAtive} />
                <CardsProdutos isAtiveSend={setIsAtive} />
                <CardsProdutos isAtiveSend={setIsAtive} />
                <CardsProdutos isAtiveSend={setIsAtive} />
            </s.CardsDivTrio>
        </ListagemContainer>
        </>
    )
}
