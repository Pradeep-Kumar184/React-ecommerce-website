import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <main style={{ marginTop: "50px" }}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
