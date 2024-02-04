"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import CUSTOM from "@/public/CUSTOM.png";
import MW from "@/public/MW.png";
import homeMart from "@/public/homeMart.png";
import quizzBot from "@/public/quizzBot.png";
import QPS from "@/public/QPS.png";
import M48 from "@/public/M48.png";

import { easeInOut, motion } from "framer-motion";
import CustomCursor from "@/components/Cursor/CustomCursor";

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
    <div className="gap-4 lg:flex justify-evenly w-11/12 m-auto transition-all duration-700 ease-in-out lg:relative lg:mt-20">
      <CustomCursor />
      <motion.div className="gap-4 lg:flex-col w-full lg:flex md:hidden">
        {projectArray.map((project, i) => (
          <motion.div
            variants={defaultAnimations}
            whileHover={{
              height: "90%",
              width: "40vw",
              transition: easeInOut,
            }}
            className="lg:h-14 lg:w-[300px] lg:overflow-hidden hidden md:flex "
            key={i}
          >
            <ProjectCard
              name={project.projectName}
              image={project.image}
              summary={project.summary}
              link={project.projectLink}
              github={project.github}
              styles={""}
            />
          </motion.div>
        ))}
      </motion.div>
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
          className="p-5 rounded-xl text-center lg:w-8/12 m-auto "
        >
          <div className="bg-kevetic p-5 rounded-full text-center w-[150px] h-[150px] bg-cover m-auto mb-10 "></div>
          Dedicated developer specializing in the front-end with a strong
          emphasis on React and related libraries. My passion lies in staying on
          top of new technologies and continuously building innovative
          solutions. Fueled by determination and a love for learning, I bring{" "}
          creativity to my work, leveraging it to enhance user experiences and
          design. As a team player, I thrive in collaborative environments,
          seamlessly integrating into diverse cultures. My commitment to
          excellence and adaptability makes me a valuable asset in any
          professional scenario, and my skills contribute to the success of the
          teams I work with.
        </motion.div>
      </motion.div>
      {projectArray.map((project, i) => (
        <ProjectCard
          key={i}
          name={project.projectName}
          image={project.image}
          summary={project.summary}
          link={project.projectLink}
          github={project.github}
          styles={"lg:hidden flex flex-col m-4"}
        />
      ))}
    </div>
  );
}

export default Projects;
