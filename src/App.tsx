import Header from "./components/Header";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./context/CartProvider";
import CardList from "./components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <main className="max-w-screen-xl relative m-auto">
            <Routes>
              <Route path="/" element={<CardList />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/thank-you" element={<ThankYou />}></Route>
            </Routes>
          </main>
        </CartProvider>
      </ProductsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
