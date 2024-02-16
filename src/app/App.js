import "../assets/styles/style.scss";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Comparing } from "./pages/Comparing";
import { Users } from "./pages/Users";
import { Favorites } from "./pages/Favorites";
import { Notfound } from "./pages/Notfound";
import { createContext, useState } from "react";
import { Order } from "./pages/Order";

export const Context = createContext();

function App() {
  const [data, setData] = useState();

  return (
    <Context.Provider value={[data, setData]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/comparing" element={<Comparing />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/users" element={<Users />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
