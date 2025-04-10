import Hero from "../components/Hero"
import { LojaBanner } from "../components/LojaBanner"
import { Products } from "../components/ListagemProdutos"
import Footer from "../components/Footer"

import { AsideBody } from "../component s/ListagemProdutos/AsideForms"

function shop() {
    return (
      <>
        <AsideBody />
        <Hero />
        <LojaBanner />
        <Products />
        <Footer />
      </>
    )
  }

export default shop
  