import Header from "./components/Header";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./components/CartProvider";
import CardList from "./components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Header></Header>
          <main className="max-w-screen-xl relative m-auto">
            <Routes>
              <Route path="/shop" element={<CardList />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </main>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
