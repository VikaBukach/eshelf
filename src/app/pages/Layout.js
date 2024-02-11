import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      
      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export { Layout };
