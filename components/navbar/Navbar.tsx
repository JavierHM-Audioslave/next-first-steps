import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>
        <Link href="/">Home</Link>
      </span>
      <span>
        <Link className="mr-2" href="/about">
          About
        </Link>
        <Link className="mr-2" href="/contact">
          Contact
        </Link>
        <Link className="mr-2" href="/pricing">
          Pricing
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
