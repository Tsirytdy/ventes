import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
 
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={user ? <Cart/> : <Navigate to="/" />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
