import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landingpage/home/HomePage'
import{ Route , BrowserRouter , Routes} from 'react-router-dom'
import SignUp from './landingpage/signup/SignUp'
import ProductPage from './landingpage/products/ProductPage'
import SupportPage from './landingpage/support/SupportPage'
import AboutPage from './landingpage/about/AboutPage'
import PricingPage from './landingpage/pricing/PricingPage'
import ErrorPage from './landingpage/Error'
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
