import { useState } from "react";

// Componentes
import { AsideCarrinho } from "./AsideCarrinho";
import { AsideForm } from "./AsideForm";
import { AsidePayment } from "./AsidePayment";
import { AsideFinish } from "./AsideFinish";
// Styles
import { AsideContainer } from "./styles";
// Contextos
import { useUI } from "../../../Contexts/UIContext";
//

export type AsidesProps = {
    setarAside: (valor: string) => void;
}

export function AsideBody () {
    const [asidePageSwitch, SetAsidePageSwitch] = useState('CARRINHO')
    const { carrinhoAberto, fecharCarrinho } = useUI();

  if (!carrinhoAberto) return null;

    return (
        <AsideContainer onClick={() => fecharCarrinho()}>
            <aside onClick={(e) => e.stopPropagation()}>
                {asidePageSwitch == 'CARRINHO' ? (
                    <AsideCarrinho setarAside={SetAsidePageSwitch}/>): null}
                {asidePageSwitch == 'FORM' ? (
                    <AsideForm setarAside={SetAsidePageSwitch}/>): null}
                {asidePageSwitch == 'PAYMENT' ? (
                    <AsidePayment setarAside={SetAsidePageSwitch}/>): null}
                {asidePageSwitch == 'FINISH' ? (
                    <AsideFinish setarAside={SetAsidePageSwitch}/>): null}
            </aside>
        </AsideContainer>
    )
}