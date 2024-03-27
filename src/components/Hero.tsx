import Image from "next/image";
import React from "react";
import Button from "./UI/Button";
import Link from "next/link";
import { MotionDiv, MotionSpan } from "./UI/MotionComponents";

const Hero = () => {
  return (
    <header
      id="home"
      className="hero relative flex items-center h-dvh bg-gray overflow-hidden"
    >
      <div className="hero-shape w-[75%] skew-x-[25deg] h-screen absolute left-[-20%] top-0 bg-darkPrimary z-20" />

      <MotionDiv
        animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeIn" }}
        style={{ transform: "translate(-30%, -50%)" }}
        className="hero-circle absolute w-[540px] h-[540px] left-[50%] top-[55%] rounded-full border-[6px] border-primary z-10"
      />

      <MotionSpan
        className="absolute z-10 top-[50%] left-[50%] "
        initial={{ left: "45%", opacity: 0 }}
        animate={{ left: "50%", opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Image
          style={{ transform: "translate(-35%, -50%)" }}
          className="hero-img object-contain"
          src="/hero.png"
          alt="hero - avancoder"
          width={400}
          height={400}
          priority
        />
      </MotionSpan>

      <div className="hero-text relative wrapper z-30">
        <div className="hero-content max-w-[640px]">
          <MotionDiv
            className="h-[80px] overflow-hidden"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero-title relative text-5xl text-primary whitespace-nowrap font-extrabold">
              Ãzizbek Fayziyev
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="hero-subtitle relative text-6xl z-10 whitespace-nowrap font-bold">
              Front-end Developer
            </h2>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="hero-about text-xl text-[#8f8f8f] my-8">
              Front-end developer focused on creating Web sites. I really like
              different projects that solve real problems.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-12"
          >
            <Link href="/Azizbek Fayziyev - Resume.pdf">
              <Button variant="secondary">
                <i className="fa-solid fa-cloud-arrow-down" /> Download CV
              </Button>
            </Link>

            <Link href="#projects">
              <Button>
                <i className="fa-solid fa-circle-arrow-down" /> Portfolio
              </Button>
            </Link>
          </MotionDiv>

          <div className="flex gap-4 mt-14">
            <MotionSpan
              initial={{ translateX: -50, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 300 }}
            >
              <Link href="https://t.me/avancoder" target="_blank">
                <i className="text-3xl bg-darkLight border border-darkLight hover:bg-transparent hover:text-primary transition-colors rounded-full p-3 fa-brands fa-telegram" />
              </Link>
            </MotionSpan>

            <MotionSpan
              initial={{ translateX: -50, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
            >
              <Link href="https://github.com/AzizbekFayziyev" target="_blank">
                <i className="text-3xl bg-darkLight border border-darkLight hover:bg-transparent hover:text-primary transition-colors rounded-full p-3 fa-brands fa-github" />
              </Link>
            </MotionSpan>

            <MotionSpan
              initial={{ translateX: -50, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
            >
              <Link href="https://www.instagram.com/avancoder/" target="_blank">
                <i className="text-3xl bg-darkLight border border-darkLight hover:bg-transparent hover:text-primary transition-colors rounded-full p-3 fa-brands fa-instagram" />
              </Link>
            </MotionSpan>

            <MotionSpan
              initial={{ translateX: -50, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            >
              <Link href="mailto:fayziyev.dev@gmail.com" target="_blank">
                <i className="text-3xl bg-darkLight border border-darkLight hover:bg-transparent hover:text-primary transition-colors rounded-full p-3 fa-solid fa-at" />
              </Link>
            </MotionSpan>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
