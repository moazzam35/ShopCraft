import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ScrollToTop from "../OtherComp/scrooltop";

function Layout() {
  return (
    <>
    <ScrollToTop/>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
