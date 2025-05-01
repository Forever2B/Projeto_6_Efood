import { useEffect } from 'react'
import { useApi } from '../Contexts/ApiContext'

export type Api_Type_Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Api_Type_Cardapio[]
}

export type Api_Type_Cardapio = {
  foto: string| undefined
  preco: number | undefined
  id: number | undefined
  nome: string | undefined
  descricao?: string
  porcao?: string
}
//
export type Api_Type_Order = {
  products: Api_Type_Items[] | null
  delivery: Api_Type_Entrega | null
  payment: Api_Type_Pagamento | null
}

export type Api_Type_Items = {
  id: number | undefined
  price: number | undefined
}
export type Api_Type_Entrega = {
  receiver: string
  address: {
    description: string
    city: string
    zipcode: number
    number: number
    complement?: string
  }
}
export type Api_Type_Pagamento = {
  card : {
    name: string
    number: number
    code: number
    expires: {
      month: number
      year: number
    }
  }
}
//


const BASE_URL = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

export async function fetchAllRestaurants(): Promise<Api_Type_Restaurantes[]> {
  const response = await fetch(BASE_URL)
  if (!response.ok) {
    throw new Error('Erro ao buscar os restaurantes')
  }
  const data = await response.json()
  return data
}

export async function fetchRestaurantById(id: number): Promise<Api_Type_Restaurantes> {
  const response = await fetch(`${BASE_URL}/${id}`)
  if (!response.ok) {
    throw new Error(`Erro ao buscar o restaurante com ID ${id}`)
  }
  const data = await response.json()
  return data
}

export const enviarPedido = async (order: Api_Type_Order ) => {
  const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  }
);

  if (!response.ok) {
    return [false];
  }

  return [true];
};

export async function fetchMenuItem(
  restaurantId: number,
  itemId: number
): Promise<Api_Type_Cardapio | undefined> {
  const restaurant = await fetchRestaurantById(restaurantId)
  const item = restaurant.cardapio.find((cardapioItem) => cardapioItem.id === itemId)
  return item
}


export function useApiLoader() {
  const { setAllRestaurantsAPI, setRestaurantAPI, restaurantId} = useApi()


  useEffect(() => {
    fetchAllRestaurants()
      .then(setAllRestaurantsAPI)
      .catch((err) => console.error('Erro ao carregar os restaurantes:', err))
  }, [setAllRestaurantsAPI])

  useEffect(() => {
    fetchRestaurantById(restaurantId)
      .then(setRestaurantAPI)
      .catch((err) => console.error('Erro ao carregar restaurante do ID:', err))
  }, [restaurantId, setRestaurantAPI])
}
