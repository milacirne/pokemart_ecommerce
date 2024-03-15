import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Acessories from './pages/Acessories'
import Cards from './pages/Cards'
import Toys from './pages/Toys'
import Comics from './pages/Comics'
import Memorabilia from './pages/Memorabilia'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/games" element={<Games />} />
    <Route path="/acessories" element={<Acessories />} />
    <Route path="/cards" element={<Cards />} />
    <Route path="/toys" element={<Toys />} />
    <Route path="/comics" element={<Comics />} />
    <Route path="/memorabilia" element={<Memorabilia />} />
  </Routes>
)

export default AppRoutes
