import { ReactNode } from "react";
import { CarrinhoProvider } from "./Contexts/ContextCarrinho";
import { UIProvider } from "./Contexts/UIContext";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <UIProvider>
      <CarrinhoProvider>
        {children}
      </CarrinhoProvider>
    </UIProvider>
  );
};
