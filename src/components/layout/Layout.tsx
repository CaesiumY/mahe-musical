import React from "react";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <main className="sm:mx-auto">{children}</main>
    </>
  );
};

export default Layout;
