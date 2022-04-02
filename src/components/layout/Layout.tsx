import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <main className="p-5 sm:w-3/4 sm:mx-auto">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
