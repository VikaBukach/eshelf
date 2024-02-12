import "../assets/styles/style.scss";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Comparing } from "./pages/Comparing";
import { Users } from "./pages/Users";
import { Cart } from "./pages/Cart";
import { Favorites } from "./pages/Favorites";
import { Notfound } from "./pages/Notfound";
import { ProductList } from "./pages/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/comparing" element={<Comparing />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Notfound />} />
        </Route>
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
