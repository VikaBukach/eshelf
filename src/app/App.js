import "../assets/styles/style.scss";
import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Comparing } from "./pages/Comparing";
import { Users } from "./pages/Users";
import { Favorites } from "./pages/Favorites";
import { Notfound } from "./pages/Notfound";
import { Order } from "./pages/Order";
import { Smartphones } from "./pages/catalog/Smartphones";
import { Laptops } from "./pages/catalog/Laptops";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/comparing" element={<Comparing />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/users" element={<Users />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
