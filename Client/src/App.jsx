
import './Main.css'
import Header from './Components/Navbar/Navbar'
import {
  BrowserRouter,
  RouterProvider,
  Route,

  Routes,
} from "react-router-dom";
import Cart from './Components/Cart/Cart'
import Homepage from './pages/homepage'
import Footer from './pages/footer'
import Product from './Components/Products/ProductsSingleView'
import MenProduct from './Components/ProductList/MenProduct'

function App() {


  return (
    <BrowserRouter>
    
    
  
    <>

      

<Header/>
<Routes>
<Route path = "/"  element = {<Homepage/>}/>
  <Route path = "/ShowCart" element = {<Cart/>}/> 
  <Route path = "/Product/:id" element = {<Product/>}/>
  <Route path ="/Men's Fashion" element = {<MenProduct/>}/>
 </Routes>
<Footer/>
  
    </>
    </BrowserRouter>
  )
}

export default App
