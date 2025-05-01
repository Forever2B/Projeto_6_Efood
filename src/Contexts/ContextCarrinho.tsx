import { createContext, useContext, useState, ReactNode } from "react";
import { Api_Type_Cardapio} from '../api/index'
import { formDelivery_type } from "../components/ListagemProdutos/AsideForms/AsideForm";
import { formPayment_type } from "../components/ListagemProdutos/AsideForms/AsidePayment";

type CarrinhoContextType = {
  toggleLimpeza: boolean;
  pedidos: Api_Type_Cardapio[];
  adicionarPedido: (pedido: Api_Type_Cardapio) => void;
  removerPedido: (id: number | undefined) => void;
  limparCarrinho: () => void;
  ligarLimpezaDeDados: () => void;
  setTempPaymentForm: (data: formPayment_type) => void;
  setTempAddressForm: (data: formDelivery_type) => void;
  tempAddressForm: formDelivery_type | undefined;
  tempPaymentForm: formPayment_type | undefined;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
  const [pedidos, setPedidos] = useState<Api_Type_Cardapio[]>([]);
  const [toggleLimpeza, setToggleLimpeza] = useState(false);
  const [tempAddressForm, setTempAddressForm] = useState<formDelivery_type | undefined>();
  const [tempPaymentForm, setTempPaymentForm] = useState<formPayment_type | undefined>();

  const adicionarPedido = (novoPedido: Api_Type_Cardapio) => {
    setPedidos(prev => [...prev, novoPedido]);
  };

  const removerPedido = (index: number | undefined) => {
    setPedidos(prev => prev.filter((_, i) => i !== index));
  };

  const ligarLimpezaDeDados = () => setToggleLimpeza(prev => !prev);

  const limparCarrinho = () => {
    setPedidos([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{ adicionarPedido, removerPedido, limparCarrinho, ligarLimpezaDeDados, setTempPaymentForm, setTempAddressForm, tempAddressForm, tempPaymentForm, toggleLimpeza, pedidos }}
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
