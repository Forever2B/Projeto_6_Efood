import { AsidesProps } from '..';
// Styles
// import * as s from './styles';
//

export function AsidePayment({setarAside}: AsidesProps) {


    const handleClick = () => {
        setarAside('FINISH');
    }

    return (
        <>
            Aside Payment
            <br />
            <button type='button' onClick={() => handleClick()}>Proximo Aside</button>
        </>
    )
}