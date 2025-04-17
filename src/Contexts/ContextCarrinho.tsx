import { createContext, useContext, useState, ReactNode } from "react";

export type Pedido = {
  id: string;
  nome: string;
  preco: string;
  img: string;
};

type CarrinhoContextType = {
  pedidos: Pedido[];
  adicionarPedido: (pedido: Pedido) => void;
  removerPedido: (id: string) => void;
  limparCarrinho: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const adicionarPedido = (novoPedido: Pedido) => {
    setPedidos(prev => [...prev, novoPedido]);
  };

  const removerPedido = (id: string) => {
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
