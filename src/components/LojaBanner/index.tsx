import { useParams } from 'react-router-dom'

import imgSrcFood1 from '../../assets/food01.png'
import imgSrcFood2 from '../../assets/food02.png'

// Estilos
import * as s from './styles'


export function LojaBanner () {
    const { id } = useParams<{ id: string }>()
    let isHighlight: boolean = false; 
    let Shoptag: string = '';
    let imgSrc: string = '';

    function FakeAPI() {
        switch (id) {
            case 'La Dolce Vita Trattoria':
                isHighlight = false;
                Shoptag = 'Italiana';
                imgSrc = imgSrcFood1;
            break;
          
            case 'Hioki Sushi':
                isHighlight = true;
                Shoptag = 'Japonesa';
                imgSrc = imgSrcFood2;
                break;
          
            default:
                imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsUb7vFmxg9tbsUoNJO-hbAKzslLklM_Nng&s';
              break;
        }      
    } 
    
    FakeAPI()
    return(
    <s.Banner imgBanner={imgSrc}>
        <div>
            <span>{Shoptag}</span>
            {isHighlight ? (<span>Destaque da semana</span>): ''}
        </div>
        <h2>{id}</h2>
    </s.Banner>
    )
}