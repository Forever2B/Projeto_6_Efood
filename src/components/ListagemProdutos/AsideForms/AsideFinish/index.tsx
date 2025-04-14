import { AsidesProps } from '..';
// Styles
// import * as s from './styles';
//

export function AsideFinish({setarAside}: AsidesProps) {


    const handleClick = () => {
        setarAside('CARRINHO');
    }

    return (
        <>
            Aside Finish
            <br />
            <button type='button' onClick={() => handleClick()}>Proximo Aside</button>
        </>
    )
}