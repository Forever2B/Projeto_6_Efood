import { ListagemContainer } from '../../GlobalStyle.tsx'
import {Card, CardDestaque} from './Cards/index.tsx'
import * as s from './styles.tsx'

export default function ListagemLojas() {


    return (
        <ListagemContainer>
            <s.UlCustom>
                <CardDestaque />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </s.UlCustom>
        </ListagemContainer>
    )
}
