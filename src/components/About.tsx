import React from "react";
import Title from "./UI/Title";
import Image from "next/image";
import { MotionDiv, MotionP } from "./UI/MotionComponents";
import AboutParallax from "./AboutParallax";

const About = () => {
  return (
    <section id="about" className="relative pt-24">
      <AboutParallax />

      <div className="wrapper">
        <Title label="ABOUT ME" />

        <div className="max-w-[840px] mx-auto text-center font-medium text-2xl text-[#8F8F8F]">
          <MotionP
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'm <span className="text-primary">Azizbek Fayziyev</span>. I am{" "}
            <span className="text-primary">17</span> years old and i live in{" "}
            <span className="text-primary">Tashkent</span>.{" "}
            <span className="text-primary">Front-End</span> Developer In{" "}
            <span className="text-primary">React JS. </span>I like to learn more
            and more about the programming, challenges that take me out of my
            comfort zone are the best.
          </MotionP>

          <MotionP
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            I can prototyped and devloped{" "}
            <span className="text-primary">landing Pages</span>,{" "}
            <span className="text-primary">E-commerce</span>,{" "}
            <span className="text-primary">Multi-Page Web Sites</span>,{" "}
            <span className="text-primary">Web Applications</span> and more..
          </MotionP>
        </div>
      </div>

      <div className="relative bg-dark mt-20 pt-20 pb-32">
        <MotionDiv
          initial={{ scale: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, filter: "blur(0)" }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-4xl text-center font-bold">My Services</h4>
        </MotionDiv>

        <div className="about-services wrapper mt-12 grid grid-cols-2 text-3xl place-items-center font-semibold">
          <MotionDiv
            initial={{ translateX: -250, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "blur(0)" }}
            transition={{ delay: 0.5 }}
          >
            <h5>
              <i className="fa-solid fa-file-code text-primary text-4xl mr-4" />
              Landing Pages
            </h5>

            <h5 className="mt-20 -ml-1">
              <i className="fa-solid fa-layer-group text-primary text-4xl mr-4" />
              Web sites
            </h5>
          </MotionDiv>

          <MotionDiv
            initial={{ translateX: 250, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "blur(0)" }}
            transition={{ delay: 0.5 }}
            className="about-mobileMargin"
          >
            <h5>
              <i className="fa-solid fa-store text-primary text-4xl mr-4" />
              E-commerce
            </h5>

            <h5 className="mt-20">
              <i className="fa-solid fa-window-maximize text-primary text-4xl mr-4" />
              Web Applications
            </h5>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ bottom: "50px" }}
          whileInView={{ bottom: "-110px" }}
          transition={{ delay: 0.3 }}
          className="absolute -z-10 right-[40px]"
        >
          <Image
            src="/about_element.svg"
            alt="about_element"
            width={120}
            height={100}
          />
        </MotionDiv>

        <MotionDiv
          initial={{ top: "50px" }}
          whileInView={{ top: "-100px" }}
          transition={{ delay: 0.3 }}
          className="absolute -z-10 left-[-10px]"
        >
          <Image
            src="/about_element.svg"
            alt="about_element"
            width={120}
            height={100}
          />
        </MotionDiv>
      </div>

      <div className="about-experence wrapper mt-20 pb-40 grid grid-cols-2 place-items-center">
        <div>
          <MotionDiv
            initial={{ scale: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, filter: "blur(0)" }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-4xl mb-8 font-bold">Education</h4>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-2xl font-semibold">December 2021 - May 2022</p>
            <h5 className="text-3xl text-primary my-2">
              Front-end Programming
            </h5>
            <h6 className="text-2xl text-lightGray">IT PARK</h6>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <p className="text-2xl font-semibold">DSeptember 2021 - November 2021</p>
            <h5 className="text-3xl text-primary my-2">Computer Literacy</h5>
            <h6 className="text-2xl text-lightGray">IT PARK</h6>
          </MotionDiv>
        </div>

        <div>
          <MotionDiv
            initial={{ scale: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1, filter: "blur(0)" }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-4xl mb-8 font-bold">Jobs</h4>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <p className="text-2xl font-semibold">
              Starting From March 2024...
            </p>
            <h5 className="text-3xl text-primary my-2">
              Front-end - Freelancer
            </h5>
            <h6 className="text-2xl text-lightGray">Freelance</h6>
          </MotionDiv>

          <MotionDiv
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <p className="text-2xl font-semibold">
              November 2023 - February 2024
            </p>
            <h5 className="text-3xl text-primary my-2">Front-end Developer</h5>
            <h6 className="text-2xl text-lightGray">Bettagraph</h6>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
