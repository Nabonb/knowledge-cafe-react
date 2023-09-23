import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="w-4/5 mx-auto mt-12 mb-16">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Knowledge Cafe</h1>
        <img className="" src="/knowledge-cafe/images/profile.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
