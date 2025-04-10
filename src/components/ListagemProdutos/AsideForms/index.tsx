import { useState } from "react";

// Componentes
import { AsideFinish } from "./AsideFinish";
import { AsideCarrinho } from "./AsideCarrinho";
import { AsideForm } from "./AsideForm";
import { AsidePayment } from "./AsidePayment";
// Styles
import { AsideContainer } from "./styles";
//

export type AsidesProps = {
    setarAside: (valor: string) => void;
}

export function AsideBody () {
    const [asidePageSwitch, SetAsidePageSwitch] = useState('CARRINHO')


    return (
        <AsideContainer>
            <div>
                {asidePageSwitch == 'CARRINHO' ? (
                    <AsideCarrinho setarAside={SetAsidePageSwitch}/>): null}
                {asidePageSwitch == 'FORM' ? (
                    <AsideForm setarAside={SetAsidePageSwitch}/>): null}
                {asidePageSwitch == 'PAYMENT' ? (
                    <AsidePayment setarAside={SetAsidePageSwitch}/>): null}
                {asidePageSwitch == 'FINISH' ? (
                    <AsideFinish setarAside={SetAsidePageSwitch}/>): null}
            </div>
        </AsideContainer>
    )
}