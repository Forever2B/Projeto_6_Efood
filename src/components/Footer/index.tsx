import * as s from './styles'

import Logo from '../../assets/logo.png'
import RedesSociais from '../../assets/redes sociais.svg'

export default function Footer() {
    return (
        <s.FooterBody>
            <div>
                <img src={Logo} alt="Efood" />
                <img className='redes' src={RedesSociais} alt="Redes sociais" />
                <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
            </div>
        </s.FooterBody>
    )
}