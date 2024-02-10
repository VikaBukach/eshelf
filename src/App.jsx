import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Search from "./pages/Search";
import Order from "./pages/Order";
import About from "./pages/About";
import { store } from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="search" element={<Search />} />
            <Route path="order" element={<Order />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
