import { motion } from "framer-motion";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type TLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: TLayout) {
  return (
    <div className="relative">
      <Navbar />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            type: "spring",
          },
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
}
