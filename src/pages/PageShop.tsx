import Hero from "../components/Hero"
import { LojaBanner } from "../components/LojaBanner"
import { Products } from "../components/ListagemProdutos"
import Footer from "../components/Footer"

import { AsideBody } from "../components/ListagemProdutos/AsideForms"

function shop() {
    return (
      <>
        <Hero />
        <AsideBody />
        <LojaBanner />
        <Products />
        <Footer />
      </>
    )
  }

export default shop
  