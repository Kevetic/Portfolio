"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import CUSTOM from "@/public/CUSTOM.png";
import MW from "@/public/MW.png";
import homeMart from "@/public/homeMart.png";
import quizzBot from "@/public/quizzBot.png";
import QPS from "@/public/QPS.png";
import M48 from "@/public/M48.png";
import { motion } from "framer-motion";
import CustomCursor from "@/components/Cursor/CustomCursor";

let projectArray = [
  {
    projectName: "OpenAi QuizzBot",
    image: quizzBot,
    demo: "/QuizzBot.mp4",
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
    demo: "/customizer.mp4",
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
    demo: "/trendingMovies.mp4",
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
    demo: "/homeMart.mp4",
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
    demo: "/QPS.mp4",
    summary:
      "Dr. Quinn, a nearby plastic surgeon, required a website for his recently inaugurated practice. We undertook the project and developed it using WordPress and PHP.",
    learned:
      "I gained extensive knowledge, primarily in PHP and templating with WordPress, and learned how to manage clientside aspects while engaging in DevOps during this experience.",
    projectLink: "https://www.quinnplasticsurgery.com/",
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
    <div className="gap-4 lg:flex flex-col justify-evenly w-11/12 m-auto transition-all duration-700 ease-in-out lg:relative ">
      <CustomCursor />
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
          transition={{ duration: 2 }}
          className="p-5 rounded-xl text-center lg:w-10/12 m-auto lg:flex gap-10"
        >
          <div className="bg-kevetic p-5 rounded-full text-center min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] bg-cover m-auto mb-10 " />
          <div className="lg:text-left">
            In each of my projects, whether they are small or abstract, my
            overall objective remains consistent. Fueled by a profound curiosity
            for engaging technologies such as React Three Fiber and libraries
            like Shadcn, I approach every project with a specific set of
            guidelines. Firstly, I strive to refine and enhance the skills I
            already have. Secondly, I aim to incorporate elements from my direct
            previous project in some capacity, helping to retain and add it to
            my toolkit. Lastly, I introduce and explore new technologies,
            fostering a dynamic and forward-thinking approach in my work.
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, type: "spring" }}
        className="lg:grid lg:grid-cols-3 gap-10 relative items-center flex flex-col"
      >
        {projectArray.map((project, i) => (
          <motion.div
            key={i}
            variants={defaultAnimations}
            className="m-8"
            whileHover={{ y: -50 }}
          >
            <ProjectCard
              demo={project.demo}
              name={project.projectName}
              image={project.image}
              summary={project.summary}
              link={project.projectLink}
              github={project.github}
              styles={"absolute top-0 h-fit w-full z-10"}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
