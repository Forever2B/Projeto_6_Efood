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
    
    const { AllRestaurantsAPI } = useApi()
    const navigate = useNavigate()

    console.log('ALLRestaurants: ' + AllRestaurantsAPI)

    if (!AllRestaurantsAPI) return <h3 className='LoadingStyle'>Carregando...</h3>
    return (
        <ListagemContainer>
          <s.UlCustom>
            {AllRestaurantsAPI.map((restaurante: Api_Type_Restaurantes) => {
              const getPage = () => {
                navigate(`/pageShop/${restaurante.id}`)
              }

              return (
                <s.LiCard key={restaurante.id} imageUrl={restaurante.capa}>
                  <div className="img">
                    <div className="space-left">
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
                    <button onClick={getPage}>Saiba mais</button>
                  </s.TextCard>
                </s.LiCard>
              )
            })}
          </s.UlCustom>
        </ListagemContainer>
      )
    }