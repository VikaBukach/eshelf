import "./App.scss";
import React, { useEffect } from "react";
import { pageLoadedAction } from "./store/actions/pageLoadedAction";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Comparing } from "./pages/Comparing";
import { Users } from "./pages/Users";
import { Favorites } from "./pages/Favorites";
import { Notfound } from "./pages/Notfound";
import { Order } from "./pages/Order";
import { Headphones } from "./pages/catalog/Headphones";
import { Monitors } from "./pages/catalog/Monitors";
import { Mouses } from "./pages/catalog/Mouses";
import { Quadcopters } from "./pages/catalog/Quadcopters";
import { Smartwatches } from "./pages/catalog/Smartwatches";
import { Smartphones } from "./pages/catalog/Smartphones";
import { Tablets } from "./pages/catalog/Tablets";
import { Tv } from "./pages/catalog/Tv";
import { Laptops } from "./pages/catalog/Laptops";
import Cart from "./components/Cart";
import { ProductPage } from "./pages/product/ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const { loading } = useSelector((state) => state.user);
  if (loading)
    return (
      <div className="page-loader">
        <div className="loader"></div>
      </div>
    );

  dispatch(pageLoadedAction());

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/monitors" element={<Monitors />} />
          <Route path="/mouses" element={<Mouses />} />
          <Route path="/quadcopters" element={<Quadcopters />} />
          <Route path="/smartwatches" element={<Smartwatches />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/tv" element={<Tv />} />
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
