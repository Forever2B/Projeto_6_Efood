import * as s from './styles.tsx'
import logo from '../../assets/logo.png'

export default function Hero() {


    return (
        <s.HeaderHero>
            <div>
                <h1>
                    <img src={logo} alt="EFood" />
                </h1>
            </div>
            <s.Title>
                Viva experiências gastronômicas no conforto da sua casa
            </s.Title>
        </s.HeaderHero>
    )
}
