import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type TLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: TLayout) {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
