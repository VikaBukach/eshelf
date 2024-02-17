import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Modal from "../components/Modal";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Outlet />
        <Modal />
      </main>

      <Footer />
    </>
  );
};

export { Layout };
