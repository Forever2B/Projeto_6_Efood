import { useEffect } from 'react'
import { useApi } from '../Contexts/ApiContext' // Importa o hook do contexto

export type Api_Type_All = {
  Restaurantes: Api_Type_Restaurantes[]
}

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

  // useEffect(() => {
  //   fetchMenuItem(restaurantId, itemId)
  //     .then((item) => {
  //       if (item) {
  //         setItemAPI(item)
  //       }
  //     })
  //     .catch((err) => console.error('Erro ao carregar item de cardápio:', err))
  // }, [restaurantId, setRestaurantAPI, itemId, setItemAPI])
}
