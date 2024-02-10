import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Comparing } from "./pages/Comparing";
import { Users } from "./pages/Users";
import { Cart } from "./pages/Cart";
import { Favorites } from "./pages/Favorites";
import { Notfound } from "./pages/Notfound";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/comparing" element={<Comparing />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/users" element={<Users />} />
              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
