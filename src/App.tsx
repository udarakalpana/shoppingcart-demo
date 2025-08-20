import {Route, Routes} from "react-router";
import ProductList from "./components/product/ProductList.tsx";
import NavBar from "./components/nav-bar/NavBar.tsx";

const App = () => {

  return (
         <div className="min-h-screen">
           <NavBar />
           <Routes>
             <Route path="/" element={<ProductList />} />
           </Routes>
         </div>
  )
}

export default App
