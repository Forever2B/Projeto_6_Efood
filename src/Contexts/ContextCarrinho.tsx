import { createContext, useContext, useState, ReactNode } from "react";
import { Api_Type_Cardapio} from '../api/index'

type CarrinhoContextType = {
  pedidos: Api_Type_Cardapio[];
  adicionarPedido: (pedido: Api_Type_Cardapio) => void;
  removerPedido: (id: number | undefined) => void;
  limparCarrinho: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [pedidos, setPedidos] = useState<Api_Type_Cardapio[]>([]);

  const adicionarPedido = (novoPedido: Api_Type_Cardapio) => {
    setPedidos(prev => [...prev, novoPedido]);
  };

  const removerPedido = (id: number | undefined) => {
    setPedidos(prev => prev.filter(p => p.id !== id));
  };

  const limparCarrinho = () => {
    setPedidos([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{ pedidos, adicionarPedido, removerPedido, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error("useCarrinho deve estar dentro do CarrinhoProvider");
  return context;
};
