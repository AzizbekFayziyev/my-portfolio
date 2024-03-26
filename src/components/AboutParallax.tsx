"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { MotionSpan } from "./UI/MotionComponents";

const AboutParallax = () => {
  const parallaxRight = useRef<HTMLSpanElement>(null);
  const parallaxLeft = useRef<HTMLSpanElement>(null);

  const parallaxRightRef = useScroll({
    target: parallaxRight,
    offset: ["start start", "end end"],
  });
  const parallaxLeftRef = useScroll({
    target: parallaxLeft,
    offset: ["start start", "end end"],
  });

  const positionRight = useTransform(
    parallaxRightRef.scrollYProgress,
    [1, 0],
    ["100px", "-320px"]
  );
  const positionLeft = useTransform(
    parallaxLeftRef.scrollYProgress,
    [1, 0],
    ["100px", "-320px"]
  );

  return (
    <div>
      <MotionSpan
        ref={parallaxRight}
        style={{ right: positionRight }}
        className="absolute  top-[50px] text-darkSecondary text-9xl font-bold -z-10 whitespace-nowrap"
      >
        ABOUT ME
      </MotionSpan>

      <MotionSpan
        ref={parallaxLeft}
        style={{ left: positionLeft }}
        className="absolute bottom-0 text-darkSecondary text-9xl font-bold -z-10 whitespace-nowrap"
      >
        ABOUT ME
      </MotionSpan>
    </div>
  );
};

export default AboutParallax;
