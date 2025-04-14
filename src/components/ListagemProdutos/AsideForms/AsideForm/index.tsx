import { AsidesProps } from '..';
// Styles
import * as s from './styles';
//

export function AsideForm({setarAside}: AsidesProps) {


    const handleClick = (asidepage:string) => {
        setarAside(asidepage);
    }

    return (
        <s.AsideFormContainer>
            <s.AsideForm action="#">
            <span className='title'>Entrega</span>
            <div className='divsLabelXinput'>
                <label htmlFor="Name">Quem irá receber</label>
                <input type="string" id="Name"required />
            </div>
            <div className='divsLabelXinput'>
                <label htmlFor="address">Endereço</label>
                <input type="string" id="address"required />
            </div>
            <div className='divsLabelXinput'>
                <label htmlFor="city">Cidade</label>
                <input type="string" id="city"required />
            </div>
            <div className="divsLabelXinput" style={{ flexDirection: 'row' }}>
                <div className="input-group">
                    <label htmlFor="cep">CEP</label>
                    <input type="number" id="cep" required />
                </div>
                <span className='space'></span>
                <div className="input-group">
                    <label htmlFor="tell">Número</label>
                    <input type="tel" id="tell" required />
                </div>
            </div>
            <div className='divsLabelXinput'>
                <label htmlFor="compl">Complemento (opcional)</label>
                <input type="string" id="compl"/>
            </div>
            </s.AsideForm>
            <br />
            <button className='buttonStyle' type='button' onClick={() => handleClick('PAYMENT')}>Continuar com o pagamento</button>
            <button className='buttonStyle' type='button' onClick={() => handleClick('CARRINHO')}>Voltar para o carrinho</button>
        </s.AsideFormContainer>
    )
}