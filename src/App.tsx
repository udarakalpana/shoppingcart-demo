import {Route, Routes} from "react-router";
import ProductList from "./components/ProductList.tsx";

const App = () => {

  return (
         <div className="min-h-screen">
           <Routes>
             <Route path="/" element={<ProductList />} />
           </Routes>
         </div>
  )
}

export default App
