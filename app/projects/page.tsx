"use client";
import React, { useState } from "react";
import CUSTOM from "@/public/CUSTOM.png";
import MW from "@/public/MW.png";
import homeMart from "@/public/homeMart.png";
import quizzBot from "@/public/quizzBot.png";
import QPS from "@/public/QPS.png";
import M48 from "@/public/M48.png";
import { motion } from "framer-motion";
import CustomCursor from "@/components/Cursor/CustomCursor";
import MobileProjects from "@/components/MobileProjects/MobileProjects";
import SelectedProject from "@/components/SelectedProject/SelectedProject";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

let projectArray = [
  {
    projectName: "OpenAi QuizzBot",
    image: quizzBot,
    demo: "/QuizzBot.mp4",
    summary:
      "This bot quizzes users on ANY subject by utilizing an API call to OpenAI, generating an unlimited number of questions within budget constraints. The motivation behind its development was to simultaneously test my knowledge and enhance coding skills, creating an efficient and interactive self-quizzing tool.",
    challenges: "",
    learned: "Working with OpenAI",
    stacks: ["Next.js", "Javascript", "React.js", "Tailwind", "Shadcn"],
    projectLink: "https://chatgpt-quizz.vercel.app/",
    github: "https://github.com/Kevetic/projectxtwo",
  },
  {
    projectName: "Shoe Customization",
    image: CUSTOM,
    demo: "/customizer.mp4",
    summary:
      "This served as a personal endeavor for me, driven by the desire to delve into learning React Three Fiber. It involves the integration of four controllable GLTF models, allowing users to select real-world models and render them on the screen.",
    challenges: "",
    learned: "",
    stacks: ["Next.js", "Javascript", "React.js", "Tailwind", "Shadcn"],
    projectLink: "https://kevetic.github.io/Custom-Shoes/",
    github: "https://github.com/Kevetic/Custom-Shoes",
  },
  {
    projectName: "Trending Movies",
    image: MW,
    demo: "/trendingMovies.mp4",
    summary:
      "I created a React app with a mobile-first approach that utilizes an API to fetch the latest trending movies and television shows. The app covers content currently in theaters as well as popular streaming platforms. This project served as a valuable exercise for me, allowing me to gain experience in working with APIs and developing a mobile-first application.",
    challenges: "",
    learned: "",
    stacks: ["Next.js", "Javascript", "React.js", "Tailwind", "Shadcn"],
    projectLink: "https://kevetic.github.io/movie-watchlist/",
    github: "https://github.com/Kevetic/movie-watchlist",
  },
  {
    projectName: "HomeMart",
    image: homeMart,
    demo: "/homeMart.mp4",
    summary:
      "HomeMart is a e-commerce site crafted using Next.js, TypeScript, DaisyUI, Prisma, MongoDB, and Tailwind. This project serves as a hands-on exploration to enhance my skills, with a particular focus on Next.js—a powerful framework for building efficient web applications. This endeavor reflects my ongoing commitment to staying abreast of the latest developments in web development and contributing to its dynamic landscape.",
    challenges: "",
    learned: "",
    stacks: ["Next.js", "Javascript", "React.js", "Tailwind", "Shadcn"],
    projectLink: "https://homemart.vercel.app/",
    github: "https://github.com/Kevetic/homeMart",
  },
  {
    projectName: "Quinns Plastic Surgery",
    image: QPS,
    demo: "/QPS.mp4",
    summary:
      "Dr. Quinn, a nearby plastic surgeon, required a website for his recently inaugurated practice. We undertook the project and developed it using WordPress and PHP.",
    learned:
      "I gained extensive knowledge, primarily in PHP and templating with WordPress, and learned how to manage clientside aspects while engaging in DevOps during this experience.",
    projectLink: "https://www.quinnplasticsurgery.com/",
    stacks: ["Next.js", "Javascript", "React.js", "Tailwind", "Shadcn"],
  },
  {
    projectName: "Make 48 Challenge",
    image: M48,
    demo: "/M48.mp4",
    challenges:
      "We took over this project from an overseas team, and around the halfway mark, the client requested us to abandon the existing work and start afresh to meet their deadlines. I had to thoroughly assess and outline each section of the project during the restart.",
    summary:
      "I took on the responsibility of initiating a React project from the ground up, focusing on organizing challenges to be completed within a 48-hour timeframe. These challenges were hosted by Make 48, a local start up business. The events involved judging, and participants had the opportunity to win cash prizes.",
    learned:
      "This marked my initial exposure to Tailwind, and I thoroughly enjoyed the experience, considering it as a game-changer. It provided me with the opportunity to delve into React at a much deeper level, gaining a comprehensive understanding of its intricacies, particularly in conjunction with context. ",
    projectLink: "https://48daychallenge.make48.com/",
    stacks: ["Next.js", "Javascript", "React.js", "Tailwind", "Shadcn"],
  },
];

type Project = {
  projectName: string;
  image: string;
  demo: string;
  summary: string;
  challenges?: string;
  learned?: string;
  projectLink: string;
  github?: string;
};

function Projects() {
  const [currentProject, setCurrentProject] = useState<Project | undefined>();

  return (
    <div
      className={`gap-4 lg:flex flex-col justify-center w-11/12 m-auto transition-all duration-700 ease-in-out lg:relative items-center ${poppins.className}`}
    >
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          type: "spring",
          transition: { duration: 1 },
        }}
        className="w-full"
      ></motion.div>
      <SelectedProject
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        projectArray={projectArray}
      />
      <div className="lg:hidden w-full">
        {projectArray.map((project, i) => (
          <MobileProjects
            key={i}
            demo={project.demo}
            name={project.projectName}
            summary={project.summary}
            link={project.projectLink}
            github={project.github}
            styles={"absolute top-0 h-fit w-full md:p-20 p-2 z-10 "}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
