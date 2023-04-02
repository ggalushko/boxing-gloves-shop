import Header from "./components/Header";
import ProductsProvider from "./context/ProductsProvider";
import CartProvider from "./context/CartProvider";
import CardList from "./components/CardList";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <main className="max-w-screen-xl relative m-auto">
            <Routes>
              <Route path="/boxing-gloves-shop" element={<CardList />}></Route>
              <Route path="/boxing-gloves-shop/cart" element={<Cart />}></Route>
              <Route
                path="/boxing-gloves-shop/thank-you"
                element={<ThankYou />}
              ></Route>
            </Routes>
          </main>
        </CartProvider>
      </ProductsProvider>
      <Footer />
    </>
  );
}

export default App;
