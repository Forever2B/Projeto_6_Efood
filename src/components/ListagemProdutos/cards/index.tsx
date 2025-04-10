import { useParams } from 'react-router-dom'

// TEMPORARIO
import imgSrcFood1 from '../../../assets/pizza.png'
import imgSrcFood2 from '../../../assets/hotroll.jpg'
// Estilos
import * as s from './styles'

type FilhoProps = {
    isAtiveSend: (valor: boolean) => void;
};

export function CardsProdutos ({isAtiveSend}: FilhoProps) {
    const { id } = useParams<{ id: string }>()
    let imgSrc: string = '';
    let sumary: string = '';
    let productTemp: string = '';

    function FakeAPI() {
        switch (id) {
            case 'La Dolce Vita Trattoria':
                imgSrc = imgSrcFood1;
                sumary = 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!';
                productTemp = 'Pizza Marguerita';
            break;
          
            case 'Hioki Sushi':
                imgSrc = imgSrcFood2;
                sumary = 'Hot Roll Especial: salmão cremoso, arroz temperado, crosta crocante e molho tarê agridoce. Quente, crocante e irresistível!';
                productTemp = 'Hot Roll';
            break;
          
            default:
                imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsUb7vFmxg9tbsUoNJO-hbAKzslLklM_Nng&s';
            break;
        }      
    }

    const handleClick = () => {
        isAtiveSend(true);
    };
    
    FakeAPI()
    return(
        <s.CardContainer>
            <img src={imgSrc} alt={`Comida do restaurante ${id}`} />
            <span>{productTemp}</span>
            <p>{sumary}</p>
            <button type='button' onClick={handleClick} className='buttonStyle'>Adicionar ao carrinho</button>
        </s.CardContainer>
    )
}