"use client";
import { navLinks } from "@/data";
import Link from "next/link";
import React from "react";
import { MotionNav } from "./UI/MotionComponents";

const Navbar = () => {
  return (
    <>
      <MotionNav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ transform: "translate(-50%)" }}
        className="absolute left-[50%] top-[30px] z-50"
      >
        <ul className="flex gap-16">
          {navLinks.map((link, id) => (
            <li
              className="nav-item relative font-bold text-xl transition-colors whitespace-nowrap"
              key={id}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </MotionNav>
    </>
  );
};

export default Navbar;
