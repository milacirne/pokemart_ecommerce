import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import AppRoutes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
