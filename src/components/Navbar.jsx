import React from "react";
import { BsCart } from "react-icons/bs";

function Navbar() {
  return (
    <header className="flex justify-between items-center h-16 mx-6 lg:mx-24">
      <nav className="flex justify-center items-center gap-36">
        <div>
          <span className="text-xl text-para font-lg">GREENMIND</span>
        </div>
        <ul className="capitalize text-thinpara lg:flex lg:justify-center lg:items-center lg:gap-8 hidden">
          <li>home</li>
          <li>products</li>
          <li>contacts</li>
        </ul>
      </nav>
      <div>
        <BsCart />
      </div>
    </header>
  );
}

export default Navbar;
