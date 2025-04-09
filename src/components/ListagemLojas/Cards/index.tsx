import { useNavigate } from 'react-router-dom'

import * as s from './styles.tsx'

import star from '../../../assets/Star.png'
import photo01 from '../../../assets/food01.png'
import photo02 from '../../../assets/food02.png'


export function Card() {
    
    const navigate = useNavigate()
    
    const getPage = (id: string) => {
        navigate(`/pageShop/${id}`)
    } 

    return (
    <s.LiCard imageUrl={photo01}>
        <div className='img'>
            <div className='space-left'>
                <s.Tag>Italiana</s.Tag>
            </div>
        </div>
        <s.TextCard className='TextDiv'>
            <div>
                <b id='Loja'>La Dolce Vita Trattoria</b>
                <div>
                    <b>4.6</b>
                    <img src={star} alt="Estrela" />
                </div>
            </div>
            <p>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
            </p>
            <button onClick={() => getPage('La Dolce Vita Trattoria')}>Saiba mais</button>
        </s.TextCard>
    </s.LiCard>
    )
}
export function CardDestaque() {

    const navigate = useNavigate()

    const getPage = (id: string) => {
        navigate(`/pageShop/${id}`)
    }      

    return (
    <s.LiCard imageUrl={photo02}>
        <div className='img'>
            <div className='space-left'>
                <s.Tag>Destaque da semana</s.Tag>
                <s.Tag>Japonesa</s.Tag>
            </div>
        </div>
        <s.TextCard className='TextDiv'>
            <div>
                <b id='Loja'>Hioki Sushi</b>
                <div>
                    <b>4.9</b>
                    <img src={star} alt="Estrela" />
                </div>
            </div>
            <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!
            </p>
            <button onClick={() => getPage('Hioki Sushi')}>Saiba mais</button>
        </s.TextCard>
    </s.LiCard>
    )
}