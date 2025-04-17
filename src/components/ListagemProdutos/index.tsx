import { useParams } from 'react-router-dom'
import { useState } from 'react'

// Componentes
import { ModalProduto } from './ModalProduto'
// Estilos
import * as s from './styles'
import { ListagemContainer } from '../../GlobalStyle'
// API e Contexto
import { useApi } from '../../Contexts/ApiContext'
// Tipagem
import { Api_Type_Cardapio, useApiLoader } from '../../api'
//

export const Products = () => {
    useApiLoader()

    const { RestaurantAPI, setItemAPI, setRestaurantId } = useApi()
    const [isAtive, setIsAtive] = useState(false)
    const { id } = useParams()
    const restaurantId = Number(id)
    setRestaurantId(restaurantId)
    
    const adicionarAoCarrinho = (item : Api_Type_Cardapio) => {
        setIsAtive(true)
        setItemAPI(item)
    }
    
    if (!RestaurantAPI) return (<h3 className="LoadingStyle">Carregando produtos...</h3>)
    return (
        <>
        {isAtive ? (<ModalProduto isAtiveSend={setIsAtive}/>): ''}
        <ListagemContainer>
            <s.CardsDivTrio>
                {RestaurantAPI.cardapio.map((item) => (
                    <s.CardContainer key={item.id}>
                    <img src={item.foto} alt={`Comida do restaurante ${RestaurantAPI.id}`} />
                    <span>{item.nome}</span>
                    <p>{item.descricao}</p>
                    <button type='button' onClick={() => { adicionarAoCarrinho(item) }} className='buttonStyle'>
                        Adicionar ao carrinho
                    </button>
                    </s.CardContainer>
                ))}
            </s.CardsDivTrio>
        </ListagemContainer>
        </>
    )
}
