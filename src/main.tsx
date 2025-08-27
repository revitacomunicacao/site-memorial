import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from 'virtual:generated-pages-react'
import './index.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

function App() {
  return useRoutes(routes)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
)
