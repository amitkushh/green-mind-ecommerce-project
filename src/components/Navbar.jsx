import React from "react";
import { BsCart } from "react-icons/bs";
import { TbMenuDeep } from "react-icons/tb";
import Profile from "../assets/navbar-images/profile.png";
import Line from "../assets/navbar-images/line.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center h-16 mx-6 lg:mx-24 lg:h-24">
      <nav className="flex justify-center items-center gap-36">
        <div>
          <Link href="/">
            <span className="text-xl text-para font-lg">GREENMIND</span>
          </Link>
        </div>
        <ul className="capitalize text-thinpara lg:flex lg:justify-center lg:items-center lg:gap-8 hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-para" : "text-thinpara"}`
            }
          >
            <li>home</li>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${isActive ? "text-para" : "text-thinpara"}`
            }
          >
            <li>products</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-para" : "text-thinpara"}`
            }
          >
            <li>contacts</li>
          </NavLink>
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
