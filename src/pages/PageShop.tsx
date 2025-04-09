import Hero from "../components/Hero"
import { LojaBanner } from "../components/LojaBanner"
import { Products } from "../components/ListagemProdutos"
import Footer from "../components/Footer"

function shop() {
    return (
      <>
        <Hero />
        <LojaBanner />
        <Products />
        <Footer />
      </>
    )
  }

export default shop
  