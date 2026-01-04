import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing page/home/HomePage'
import{ Route , BrowserRouter , Routes} from 'react-router-dom'
import SignUp from './landing page/signup/SignUp'
import ProductPage from './landing page/products/ProductPage'
import SupportPage from './landing page/support/SupportPage'
import AboutPage from './landing page/about/AboutPage'
import PricingPage from './landing page/pricing/PricingPage'
import ErrorPage from './landing page/Error'
import Navbar from './landing page/NavBar'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/product' element={<ProductPage />}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  </BrowserRouter>
)
