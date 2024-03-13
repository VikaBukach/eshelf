import "./App.scss";
import React, { useCallback, useEffect } from "react";
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
import { ProductPage } from "./pages/product/ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/slices/authSlice";

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getUser());
  }, []);

  const { loading } = useSelector((state) => state.user);
  if (loading)
    return (
      <div className="page-loader">
        <div className="loader"></div>
      </div>
    );

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
          <Route path="/:collection/:id" element={<ProductPage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
