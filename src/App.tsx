import "./App.css";
import Header from "./components/Header";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./components/CartProvider";
import CardList from "./components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header></Header>
      <ProductsProvider>
        <CartProvider>
          <CardList></CardList>
          <Cart></Cart>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
