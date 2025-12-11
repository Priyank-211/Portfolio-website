import React from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav.ul sm:flex items-center gap-6 ">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          about
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 ">
      <div className=" mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 ">
          <a
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white "
            href="/"
          >
            Priyank
          </a>
          <button
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden "
            onClick={() => setIsOpen(!IsOpen)}
          >
            <img
              src={IsOpen ? closeIcon : menuIcon}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex  ">
            <Navigation />
          </nav>
        </div>
      </div>
      {IsOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
