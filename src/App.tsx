import {Route, Routes} from "react-router";
import ProductList from "./components/product/ProductList.tsx";
import NavBar from "./components/nav-bar/NavBar.tsx";
import Cart from "./components/cart/Cart.tsx";

const App = () => {

  return (
         <div className="min-h-screen">
           <NavBar />
           <Routes>
             <Route path="/" element={<ProductList />} />
             <Route path="/cart" element={<Cart />} />
           </Routes>
         </div>
  )
}

export default App
