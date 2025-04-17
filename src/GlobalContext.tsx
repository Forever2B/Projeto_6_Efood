import { ReactNode } from "react";
// Importação dos providers
import { CarrinhoProvider } from "./Contexts/ContextCarrinho";
import { UIProvider } from "./Contexts/UIContext";
import { ApiProvider } from "./Contexts/ApiContext";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ApiProvider>
      <UIProvider>
        <CarrinhoProvider>
          {children}
        </CarrinhoProvider>
      </UIProvider>
    </ApiProvider>
  );
};
