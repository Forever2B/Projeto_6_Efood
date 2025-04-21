import * as s from './styles.tsx'
import logo from '../../assets/logo.png'

import { useParams } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
// Contextos
import { useUI } from '../../Contexts/UIContext.tsx';
import { useCarrinho } from '../../Contexts/ContextCarrinho.tsx';
//

export default function Hero() {
    const { pedidos } = useCarrinho();
    const produtosNoCarrinho = pedidos.length; 

    const { abrirCarrinho } = useUI();
    
    const { id } = useParams<{ id?: string }>()
    const isHome = !id

    return (
        <s.HeaderHero isHome={isHome}>
            <div className='WidthHeader'>
                    {!isHome ? (
                        <s.ReturnButton className='buttonStyle' to={'../'}>Voltar aos restaurantes</s.ReturnButton>
                    ): ''}
                <div>
                    <h1>
                        <img src={logo} alt="EFood" />
                    </h1>
                </div>
                    {!isHome ? (
                        <s.CarrinhoButton onClick={() => abrirCarrinho()} type='button' className='buttonStyle'>
                            <span>{produtosNoCarrinho} produto(s) no carrinho</span>
                            <FaShoppingBasket />
                        </s.CarrinhoButton>
                    ): ''}
                {isHome ? (
                    <s.Title>
                        Viva experiências gastronômicas no conforto da sua casa
                    </s.Title>
                ): ''}
            </div>
        </s.HeaderHero>
    )
}
