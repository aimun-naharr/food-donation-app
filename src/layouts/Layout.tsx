import React from "react";
import Navbar from "./Navbar";

type TLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: TLayout) {
  return (
    <div className="relative">
      <Navbar />
      <>{children}</>
      <footer>footer</footer>
    </div>
  );
}
