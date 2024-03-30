import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>
        <a href="/">Home</a>
      </span>
      <span>
        <a className="mr-2" href="/about">
          About
        </a>
        <a className="mr-2" href="/contact">
          Contact
        </a>
        <a className="mr-2" href="/pricing">
          Pricing
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
