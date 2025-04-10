import { useParams } from 'react-router-dom'

// TEMPORARIO
import imgSrcFood1 from '../../../assets/pizza.png'
import imgSrcFood2 from '../../../assets/hotroll.jpg'
//Styles
import * as s from './style'
//

type FilhoProps = {
    isAtiveSend: (valor: boolean) => void;
};

export function ModalProduto({isAtiveSend}: FilhoProps) {
    const { id } = useParams<{ id: string }>()
    let imgSrc: string = '';
    let sumary: string = '';
    let portion: string = '';
    let productTemp: string = '';
    let value: string = '0';

    function FakeAPI() {
        switch (id) {
            case 'La Dolce Vita Trattoria':
                imgSrc = imgSrcFood1;
                sumary = 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.';
                portion = 'Serve de 3 a 4 pessoas.'
                productTemp = 'Pizza Marguerita';
                value = '60,90';
            break;
          
            case 'Hioki Sushi':
                imgSrc = imgSrcFood2;
                sumary = 'Hot Roll Especial: uma explosão de sabor em cada mordida! Nosso Hot Roll é cuidadosamente preparado com arroz temperado no ponto certo, recheado com salmão cremoso de alta qualidade, envolto por uma alga crocante e coberto com uma generosa crosta empanada, dourada e crocante. Finalizado com um delicioso molho tarê agridoce que realça ainda mais o sabor do salmão, esse sushi quente é perfeito para quem busca uma experiência intensa, aconchegante e inesquecível. Quente, crocante e simplesmente irresistível!';
                portion = 'Serve de 1 a 2 pessoas'
                productTemp = 'Hot Roll';
                value = '95,50';
            break;
          
            default:
                imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsUb7vFmxg9tbsUoNJO-hbAKzslLklM_Nng&s';
            break;
        }      
    }

    const handleClick = () => {
        isAtiveSend(false);
    };
    
    FakeAPI()
    return (
        <s.ProductModalContainer onClick={handleClick}>
            <s.CardModal onClick={(e) => e.stopPropagation()}>
                <img src={imgSrc} alt={productTemp} />
                <s.ContainerTextModal>
                    <h3>{productTemp}</h3>
                    <div>
                        <p className='spacing'>{sumary}</p>
                        <p>{portion}</p>
                    </div>
                    <button type='button' onClick={handleClick} className='buttonStyle'>Adicionar ao carrinho - R$ {value}</button>
                </s.ContainerTextModal>
            </s.CardModal>
        </s.ProductModalContainer>
    )
}