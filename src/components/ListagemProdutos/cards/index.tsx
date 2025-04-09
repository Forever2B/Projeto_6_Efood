import { useParams } from 'react-router-dom'

// TEMPORARIO
import imgSrcFood1 from '../../../assets/pizza.svg'
import imgSrcFood2 from '../../../assets/hotroll.jpg'
// Estilos
import * as s from './styles'

export function CardsProdutos () {
    const { id } = useParams<{ id: string }>()
    let imgSrc: string = '';

    function FakeAPI() {
        switch (id) {
            case 'La Dolce Vita Trattoria':
                imgSrc = imgSrcFood1;
            break;
          
            case 'Hioki Sushi':
                imgSrc = imgSrcFood2;
            break;
          
            default:
                imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsUb7vFmxg9tbsUoNJO-hbAKzslLklM_Nng&s';
            break;
        }      
    } 
    
    FakeAPI()
    return(
        <s.CardContainer>
            <img src={imgSrc} alt={`Comida do restaurante ${id}`} />
            <p>Temporario</p>
        </s.CardContainer>
    )
}