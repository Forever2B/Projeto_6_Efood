import { createContext, useContext, useState, ReactNode } from "react";

type UIContextType = {
  carrinhoAberto: boolean;
  abrirCarrinho: () => void;
  fecharCarrinho: () => void;
  alternarCarrinho: () => void;
};

const UIContext = createContext<UIContextType | null>(null);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const abrirCarrinho = () => setCarrinhoAberto(true);
  const fecharCarrinho = () => setCarrinhoAberto(false);
  const alternarCarrinho = () => setCarrinhoAberto(prev => !prev);

  return (
    <UIContext.Provider value={{ carrinhoAberto, abrirCarrinho, fecharCarrinho, alternarCarrinho}}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI deve estar dentro do UIProvider");
  return context;
};
