"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import CUSTOM from "@/public/CUSTOM.png";
import MW from "@/public/MW.png";
import homeMart from "@/public/homeMart.png";
import quizzBot from "@/public/quizzBot.png";
import QPS from "@/public/QPS.png";
import M48 from "@/public/M48.png";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { motion } from "framer-motion";

let projectArray = [
  {
    projectName: "OpenAi QuizzBot",
    image: quizzBot,
    summary:
      "This bot quizzes users on ANY subject by utilizing an API call to OpenAI, generating an unlimited number of questions within budget constraints. The motivation behind its development was to simultaneously test my knowledge and enhance coding skills, creating an efficient and interactive self-quizzing tool.",
    challenges: "",
    learned: "",
    projectLink: "https://chatgpt-quizz.vercel.app/",
    github: "https://github.com/Kevetic/projectxtwo",
  },
  {
    projectName: "Shoe Customization",
    image: CUSTOM,
    summary:
      "This served as a personal endeavor for me, driven by the desire to delve into learning React Three Fiber. It involves the integration of four controllable GLTF models, allowing users to select real-world models and render them on the screen.",
    challenges: "",
    learned: "",
    projectLink: "https://kevetic.github.io/Custom-Shoes/",
    github: "https://github.com/Kevetic/Custom-Shoes",
  },
  {
    projectName: "Trending Movies",
    image: MW,
    summary:
      "I created a React app with a mobile-first approach that utilizes an API to fetch the latest trending movies and television shows. The app covers content currently in theaters as well as popular streaming platforms. This project served as a valuable exercise for me, allowing me to gain experience in working with APIs and developing a mobile-first application.",
    challenges: "",
    learned: "",
    projectLink: "https://kevetic.github.io/movie-watchlist/",
    github: "https://github.com/Kevetic/movie-watchlist",
  },
  {
    projectName: "HomeMart",
    image: homeMart,
    summary:
      "HomeMart is a e-commerce site crafted using Next.js, TypeScript, DaisyUI, Prisma, MongoDB, and Tailwind. This project serves as a hands-on exploration to enhance my skills, with a particular focus on Next.js—a powerful framework for building efficient web applications. This endeavor reflects my ongoing commitment to staying abreast of the latest developments in web development and contributing to its dynamic landscape.",
    challenges: "",
    learned: "",
    projectLink: "https://homemart.vercel.app/",
    github: "https://github.com/Kevetic/homeMart",
  },
  {
    projectName: "Quinns Plastic Surgery",
    image: QPS,
    summary:
      "Dr. Quinn, a nearby plastic surgeon, required a website for his recently inaugurated practice. We undertook the project and developed it using WordPress and PHP.",
    learned:
      "I gained extensive knowledge, primarily in PHP and templating with WordPress, and learned how to manage clientside aspects while engaging in DevOps during this experience.",
    projectLink: "https://www.quinnplasticsurgery.com/",
  },
  {
    projectName: "Make 48 Challenge",
    image: M48,
    challenges:
      "We took over this project from an overseas team, and around the halfway mark, the client requested us to abandon the existing work and start afresh to meet their deadlines. I had to thoroughly assess and outline each section of the project during the restart.",
    summary:
      "I took on the responsibility of initiating a React project from the ground up, focusing on organizing challenges to be completed within a 48-hour timeframe. These challenges were hosted by Make 48, a local start up business. The events involved judging, and participants had the opportunity to win cash prizes.",
    learned:
      "This marked my initial exposure to Tailwind, and I thoroughly enjoyed the experience, considering it as a game-changer. It provided me with the opportunity to delve into React at a much deeper level, gaining a comprehensive understanding of its intricacies, particularly in conjunction with context. ",
    projectLink: "https://48daychallenge.make48.com/",
  },
];

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
    x: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

function Projects() {
  let sliced = projectArray.slice(1);
  let first = projectArray[0];
  return (
    <div className="gap-4 flex flex-col w-11/12 m-auto transition-all duration-700 ease-in-out">
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0, type: "spring", transition: { duration: 2 } }}
      >
        <ProjectCard
          name={first.projectName}
          image={first.image}
          summary={first.summary}
          link={first.projectLink}
          github={first.github}
          styles={"w-full"}
          first={first}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.4, type: "spring" }}
        className="md:grid md:grid-cols-3 gap-4 flex flex-col "
      >
        {sliced.map((project, i) => (
          <motion.div
            key={i}
            variants={defaultAnimations}
            className="flex flex-col justify-center items-center"
          >
            <Drawer>
              <DrawerTrigger className="text-center flex justify-center items-center flex-col p-12 w-full hover:scale-105 transition-all ease-in-out duration-500 border rounded-lg max-h-[150px] min-h-[150px]">
                {project.projectName}
                <Image
                  src={project.image}
                  alt="avatar"
                  width={100}
                  height={100}
                  className="rounded-lg max-h-[70px]"
                />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    <h1>{project.projectName}</h1>
                  </DrawerTitle>
                  <DrawerDescription>
                    <ProjectCard
                      key={i}
                      name={project.projectName}
                      image={project.image}
                      summary={project.summary}
                      link={project.projectLink}
                      github={project.github}
                      styles={
                        "w-full md:overflow-hidden  relative transition-all duration-700 ease-in-out border-none"
                      }
                    />
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <ArrowUpIcon
                      className={` h-10 w-full justify-center items-center flex hover:rotate-180 duration-500`}
                    />
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
