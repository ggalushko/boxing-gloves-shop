import { Routes, Route } from "react-router-dom";
import { Header, Cart, CardList, ThankYou, Footer } from "./components";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <main className="max-w-screen-xl relative m-auto">
            <Routes>
              <Route path="/" element={<CardList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </main>
        </CartProvider>
      </ProductsProvider>
      <Footer />
    </>
  );
}

export default App;
