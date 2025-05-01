//Api e contextos
import { useApi } from '../../Contexts/ApiContext'
// Estilos
import * as s from './styles'
//

export function LojaBanner () {
    const { RestaurantAPI } = useApi()

    if (!RestaurantAPI) return (<s.Banner imgbanner='https://t4.ftcdn.net/jpg/01/84/65/81/360_F_184658151_AgNIyLDq1uTeWimbkTUcF9osyZHI1Pj2.jpg'></s.Banner>)
    return(
    <s.Banner imgbanner={RestaurantAPI.capa}>
        <div className='WidthBanner'>
            <div className='tags'>
                <span>{RestaurantAPI.tipo}</span>
                {RestaurantAPI.destacado ? (<span>Destaque da semana</span>): ''}
            </div>
            <h2>{RestaurantAPI.titulo}</h2>
        </div>
    </s.Banner>
    )
}