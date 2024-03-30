"use client";

import React from "react";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

export type NavItemType = {
  path: string;
  text: string;
};

export const ActiveLink = ({ path, text }: NavItemType) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      href={path}
      className={`mr-2 ${style.link} ${
        pathName === path && style["active-link"]
      }`}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
