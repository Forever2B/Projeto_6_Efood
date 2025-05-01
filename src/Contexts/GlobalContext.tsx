import { ReactNode } from "react";
// Importação dos providers
import { CarrinhoProvider } from "./ContextCarrinho";
import { UIProvider } from "./UIContext";
import { ApiProvider } from "./ApiContext";

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
