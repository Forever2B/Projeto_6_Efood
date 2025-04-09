// App.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import PageShop from './pages/PageShop.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pageShop/:id" element={<PageShop />} />
    </Routes>
  )
}

export default App
