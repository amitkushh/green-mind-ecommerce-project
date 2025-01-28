import React from "react";
import { BsCart } from "react-icons/bs";
import { TbMenuDeep } from "react-icons/tb";
import Profile from "../assets/navbar-images/profile.png"
import Line from "../assets/navbar-images/line.png"

function Navbar() {
  return (
    <header className="flex justify-between items-center h-16 mx-6 lg:mx-24 lg:h-24">
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
      <div className="hidden lg:flex lg:justify-center lg:items-center gap-12">
        <BsCart />
        <img src={Profile} />
        <img src={Line} />
        <TbMenuDeep />
      </div>
    </header>
  );
}

export default Navbar;
