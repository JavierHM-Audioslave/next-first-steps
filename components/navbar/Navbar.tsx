import React, { ReactNode } from "react";
import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import ActiveLink, { NavItemType } from "../active-link/ActiveLink";

const navItems = [
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
        {navItems.map(
          (navItem: NavItemType): ReactNode => (
            <ActiveLink key={navItem.path} {...navItem} />
          )
        )}
      </span>
    </nav>
  );
};

export default Navbar;
