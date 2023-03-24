import "./App.css";
import Header from "./components/Header";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./components/CartProvider";
import CardList from "./components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/shop" element={<CardList/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
