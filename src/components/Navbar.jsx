import React from "react";

function Navbar() {
  return (
    <header className="flex justify-between items-center h-14">
      <nav className="flex justify-center items-center gap-36">
        <div>
          <span>GREENMIND</span>
        </div>

        <ul className="capitalize flex justify-center items-center gap-8">
          <li>home</li>
          <li>products</li>
          <li>contacts</li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
}

export default Navbar;
