"use client";
import React from "react";
import Title from "./UI/Title";
import Image from "next/image";
import Button from "./UI/Button";
import { projectData } from "@/data";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <section
      className="relative overflow-hidden bg-darkPrimary pb-10 md:py-20 mt-20"
      id="projects"
    >
      <Title label="PROJECTS" />

      <div className="wrapper mt-12">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            780: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1180: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {projectData.map((project, id) => (
            <SwiperSlide key={id}>
              <div className="project-card w-[380px] bg-darkSecondary rounded-2xl overflow-hidden shadow-lg mx-auto">
                <div className="project-card-image relative w-full h-[215px]">
                  <Image
                    src={project.img}
                    alt={project.title + " - image"}
                    objectFit="cover"
                    fill
                  />
                </div>

                <div className="p-5">
                  <h5 className="text-2xl font-bold mb-4">{project.title}</h5>

                  <span className="font-semibold text-light text-xl">
                    <i className="fa-solid fa-code text-primary text-2xl mr-2" />{" "}
                    {project.stack}
                  </span>

                  <div className="flex justify-between items-center mt-6">
                    <Link target="_blank" href={project.live}>
                      <Button size="small" variant="secondary">
                        View Code <i className="fa-solid fa-arrow-right-long" />
                      </Button>
                    </Link>

                    <Link target="_blank" href={project.code}>
                      <Button size="small">Live Preview</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-[-320px] right-[-400px] md:right-[-320px] w-[640px] h-[640px] rounded-full bg-circlesColor" />
      <div className="absolute bottom-[-320px] left-[-400px] md:left-[-320px] w-[640px] h-[640px] rounded-full bg-circlesColor" />
    </section>
  );
};

export default Projects;
