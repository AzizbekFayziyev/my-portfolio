"use client";
import React, { useState } from "react";
// Burger menu
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { navLinks } from "@/data";
import Link from "next/link";
import { MotionDiv, MotionSpan } from "./UI/MotionComponents";
import { AnimatePresence } from "framer-motion";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="menu hidden fixed right-5 top-5 z-50 bg-dark shadow-lg rounded-full p-3">
        <Burger
          Component="button"
          type="button"
          isOpen={menu}
          onClick={() => setMenu((prev) => !prev)}
        />
      </div>

      <AnimatePresence>
        {menu && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.1 }}
            className="fixed left-0 top-0 w-full h-full z-40 bg-background flex flex-col items-center justify-center"
          >
            {navLinks.map((link, id) => (
              <Link
                key={id}
                onClick={() => setMenu(false)}
                className="text-3xl font-semibold my-4 active:text-primary"
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
