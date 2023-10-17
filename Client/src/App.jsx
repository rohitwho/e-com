import "./Main.css";
import Header from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Homepage from "./pages/homepage";
import Footer from "./pages/footer";
import Product from "./Components/ProductList/ProductsSingleView";
import ProductGrid from "./Components/ProductList/Product";
import Deals from "./Components/Hero/DealsPage/DealsPage";
import FourOFour from "./Components/404/FourOFour";
import PostProduct from "./Components/Products/PostProduct";
import Login from "./Components/Login-SignUp/Login";
import SignUp from "./Components/Login-SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ShowCart" element={<Cart />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Fashion" element={<ProductGrid />} />
          <Route path="/Deals" element={<Deals />} />
          <Route path = "/PostProduct" element ={< PostProduct/>}/>
          <Route path = "/Login" element = {<Login/>}/>
          <Route path = "/SignUp" element = {<SignUp/>}/>
           <Route path="*" element={<FourOFour />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
