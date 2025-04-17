import { createContext, useContext, useState, ReactNode } from 'react'
import { Api_Type_Cardapio, Api_Type_Restaurantes } from '../api'

type ApiContextType = {
  AllRestaurantsAPI: Api_Type_Restaurantes[] | null
  setAllRestaurantsAPI: (data: Api_Type_Restaurantes[]) => void

  RestaurantAPI: Api_Type_Restaurantes | null
  setRestaurantAPI: (data: Api_Type_Restaurantes) => void

  ItemAPI: Api_Type_Cardapio | null
  setItemAPI: (data: Api_Type_Cardapio) => void

  restaurantId: number
  setRestaurantId: (data: number) => void

  itemId: number
  setItemId: (data:number) => void
}

const ApiContext = createContext<ApiContextType | undefined>(undefined)

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [AllRestaurantsAPI, setAllRestaurantsAPI] = useState<Api_Type_Restaurantes[] | null>(null)
  const [RestaurantAPI, setRestaurantAPI] = useState<Api_Type_Restaurantes | null>(null)
  const [ItemAPI, setItemAPI] = useState<Api_Type_Cardapio | null>(null)
  const [restaurantId, setRestaurantId] = useState(0)
  const [itemId, setItemId] = useState(0)

  return (
    <ApiContext.Provider
      value={{
        AllRestaurantsAPI,
        setAllRestaurantsAPI,
        RestaurantAPI,
        setRestaurantAPI,
        ItemAPI,
        setItemAPI,
        restaurantId,
        setRestaurantId,
        itemId,
        setItemId
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}


export const useApi = () => {
  const context = useContext(ApiContext)
  if (!context) {
    throw new Error('useApi deve ser usado dentro de um ApiProvider')
  }
  return context
}
