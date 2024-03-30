import React, { ReactNode } from "react";
import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";

type navItemType = {
  path: string;
  text: string;
};

const navItems: navItemType[] = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/">
        <HomeIcon className="mx-2" size={24} />
        Home
      </Link>
      <span>
        {/* <Link className="mr-2" href="/about">
          About
        </Link>
        <Link className="mr-2" href="/contact">
          Contact
        </Link>
        <Link className="mr-2" href="/pricing">
          Pricing
        </Link> */}
        {navItems.map(
          (navItem: navItemType): ReactNode => (
            <Link key={navItem.path} href={navItem.path} className="mr-2">
              {navItem.text}
            </Link>
          )
        )}
      </span>
    </nav>
  );
};

export default Navbar;
