"use client";
import { navLinks } from "@/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MotionNav } from "./UI/MotionComponents";

const Navbar = () => {
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY >= 150 ? setFixed(true) : setFixed(false);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <MotionNav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ transform: "translate(-50%)" }}
      className={`navbar ${
        isFixed
          ? "fixed backdrop-blur-xl backdrop-saturate-200 bg-dark/30 py-5 top-0 w-full grid place-content-center"
          : "absolute top-[30px]"
      } left-[50%] z-50 transition-all `}
    >
      <ul  className="flex gap-16">
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
  );
};

export default Navbar;
