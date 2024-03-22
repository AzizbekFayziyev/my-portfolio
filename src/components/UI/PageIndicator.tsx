"use client";
import { useScroll, motion, useTransform, easeOut } from "framer-motion";
import React, { useEffect } from "react";

const PageIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if ("ontouchstart" in window || navigator.maxTouchPoints) {
    return null;
  } else {
    return (
      <motion.div
        style={{ transform: "translate(0,-50%)", height: scrollY }}
        className={`w-2 bg-primary fixed z-[999] right-0 top-[50%]`}
      ></motion.div>
    );
  }
};

export default PageIndicator;