//API e Tipagem
import { useApi } from '../../Contexts/ApiContext.tsx'
import { Api_Type_Restaurantes, useApiLoader } from '../../api/index.tsx'
// Estilos
import { ListagemContainer } from '../../GlobalStyle.tsx'
import * as s from './styles.tsx'
// assets
import star from '../../assets/Star.png'
// 
import { useNavigate } from 'react-router-dom'
//

export default function ListagemLojas() {
  useApiLoader()

  const { AllRestaurantsAPI, setRestaurantId } = useApi()
  const navigate = useNavigate()
  
  if (!AllRestaurantsAPI) return <h3 className="LoadingStyle">Carregando lojas...</h3>
  const destaques = AllRestaurantsAPI.filter((r) => r.destacado)
  const normais = AllRestaurantsAPI.filter((r) => !r.destacado)
  
  const renderCard = (restaurante: Api_Type_Restaurantes) => {
    const getPageAndSetShopId = () => [
      setRestaurantId(restaurante.id) ,navigate(`/pageShop/${restaurante.id}`)]
      
    return (
      <s.LiCard key={restaurante.id} imageUrl={restaurante.capa}>
        <div className="img">
          <div className="space-left">
            {restaurante.destacado && <s.Tag>Destaque da semana</s.Tag>}
            <s.Tag>{restaurante.tipo}</s.Tag>
          </div>
        </div>
        <s.TextCard className="TextDiv">
          <div>
            <b id="Loja">{restaurante.titulo}</b>
            <div>
              <b>{restaurante.avaliacao}</b>
              <img src={star} alt="Estrela" />
            </div>
          </div>
          <p>{restaurante.descricao}</p>
          <button onClick={getPageAndSetShopId}>Saiba mais</button>
        </s.TextCard>
      </s.LiCard>
    )
  }

  return (
    <ListagemContainer>
      <s.UlCustom>
        {destaques.map(renderCard)}
        {normais.map(renderCard)}
      </s.UlCustom>
    </ListagemContainer>
  )
}
