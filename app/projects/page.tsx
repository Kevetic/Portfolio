"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import CUSTOM from "@/public/CUSTOM.png";
import MW from "@/public/MW.png";
import homeMart from "@/public/homeMart.png";
import quizzBot from "@/public/quizzBot.png";
import kevetic from "@/public/kevetic.png";
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
  return (
    <div className="gap-4 flex flex-col w-11/12 m-auto transition-all duration-700 ease-in-out">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          type: "spring",
          transition: { duration: 1 },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="bg-transparent border p-5 rounded-xl text-center"
        >
          <>
            <Image
              src={kevetic}
              width={250}
              height={50}
              className="rounded-full m-auto p-10"
              alt="profile picture"
            />
          </>
          <span>Dedicated</span> developer specializing in the front-end with a
          strong emphasis on React and related libraries. My passion lies in
          staying on top of new technologies and continuously building{" "}
          <span>innovative</span> solutions. Fueled by
          <span> determination</span> and a love for learning, I bring{" "}
          <span>creativity</span> to my work, leveraging it to enhance user
          experiences and design. As a <span>team player</span>, I thrive in
          collaborative environments, seamlessly integrating into diverse
          cultures. My commitment to excellence and <span>adaptability</span>{" "}
          makes me a valuable asset in any professional scenario, and my skills
          contribute to the success of the teams I work with.
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        transition={{ staggerChildren: 0.4, type: "spring" }}
        whileInView="visible"
        className="gap-4 flex flex-col"
      >
        {projectArray.map((project, i) => (
          <motion.div
            key={i}
            variants={defaultAnimations}
            className="flex flex-col justify-center items-center border rounded-lg h-full md:h-14 w-full md:w-1/2"
            whileHover={{
              width: "100%",
              height: "100%",
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
