// App.tsx
import { Routes, Route } from 'react-router-dom'
import { AppProviders } from './Contexts/GlobalContext.tsx'
// Rotas
import Home from './pages/Home.tsx'
import PageShop from './pages/PageShop.tsx'
//
function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageShop/:id" element={<PageShop />} />
      </Routes>
    </AppProviders>
  )
}

export default App
