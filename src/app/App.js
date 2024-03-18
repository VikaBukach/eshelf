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
import { Smartphones } from "./pages/catalog/Smartphones";
import { EReaders } from "./pages/catalog/EReaders";
import { Headphones } from "./pages/catalog/Headphones";
import { Monitors } from "./pages/catalog/Monitors";
import { Mouses } from "./pages/catalog/Mouses";
import { PortableSpeakers } from "./pages/catalog/PortableSpeakers";
import { Quadcopters } from "./pages/catalog/Quadcopters";
import { Smartwatches } from "./pages/catalog/Smartwatches";
import { Tablets } from "./pages/catalog/Tablets";
import { TV } from "./pages/catalog/Tv";
import { Laptops } from "./pages/catalog/Laptops";
import Cart from "./components/Cart";
import { ProductPage } from "./pages/product/ProductPage";
import UserProfile from "./pages/User/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(pageLoadedAction());
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
          <Route path="/e-readers" element={<EReaders />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/monitors" element={<Monitors />} />
          <Route path="/mouses" element={<Mouses />} />
          <Route path="/portable-speakers" element={<PortableSpeakers />} />
          <Route path="/quadcopters" element={<Quadcopters />} />
          <Route path="/smartwatches" element={<Smartwatches />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/comparing" element={<Comparing />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/user/:activepage" element={<Users />} />
          <Route path="/:collection/:id" element={<ProductPage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
