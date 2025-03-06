import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import { ShopContextProvider } from "./textContext/ShopContext";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Home";
import Cloths from "./pages/shop/Cloths";
import Kitchen from "./pages/shop/Kitchen";
import Sport from "./pages/shop/Sport";
import Electronic from "./pages/shop/Electronic";
import Navagation from "./component/Navagation";
import Contact from "./pages/question/Contact";
import Login from "./pages/question/Login";





function App() {
  return (
    <ShopContextProvider>
    <div className="App">
      <Router>
        <Navagation/>
         <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cloths" element={<Cloths/>}/>
          <Route path="/sport" element={<Sport/>}/>
          <Route path="/kitchen" element={<Kitchen/>}/>
          <Route path="/electronic" element={<Electronic/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
         </Routes>
      </Router>
    </div>
    </ShopContextProvider>
  );
}

export default App;