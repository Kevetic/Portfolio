import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import CUSTOM from "/CUSTOM.png";
import MW from "/MW.png";
import homeMart from "/homeMart.png";

export default function Projects() {
  const defaultState = {
    hidden: {
      opacity: 0,
      x: -500,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const projectArray = [
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
        "HomeMart is a sleek e-commerce site crafted using Next.js, TypeScript, DaisyUI, Prisma, MongoDB, and Tailwind. This project serves as a hands-on exploration to enhance my skills, with a particular focus on Next.js—a powerful framework for building efficient web applications. This endeavor reflects my ongoing commitment to staying abreast of the latest developments in web development and contributing to its dynamic landscape.",
      challenges: "",
      learned: "",
      projectLink: "https://homemart.vercel.app/",
      github: "https://github.com/Kevetic/homeMart",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.4 }}
      className="flex justify-center items-baseline text-center h-full relative"
    >
      <div className="project-container w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
        {projectArray.map((project, idx) => (
          <motion.div
            key={idx}
            variants={defaultState}
            transition={{
              duration: 0.4,
              ease: "linear",
              type: "spring",
              damping: 12,
            }}
            className=" rounded-lg flex flex-col overflow-hidden text-left p-2 relative items-center shadow shadow-border rounded-lg bg-gradient-to-r from-border to-background"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-lg shadow shadow-border rounded-lg bg-gradient-to-r from-border to-background"
            />
            <span className="text-lg font-semibold my-2 bg-transparent">
              {project.projectName}
            </span>

            <div className="drawer flex flex-col items-center text-xs lg:text-base bg-transparent">
              <div className="my-1 h-64 bg-transparent">{project.summary}</div>
              <div className="flex justify-around w-full absolute bottom-0 items-center bg-transparent">
                <button className="flex justify-evenly items-center w-1/3 border border-border p-1 rounded-lg hover:scale-105 ease-in duration-200 hover:shadow-border hover:shadow m-1">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-3 bg-transparent"
                  >
                    DEMO
                    <FaExternalLinkAlt />
                  </a>
                </button>

                {project.github && (
                  <button className="flex justify-evenly items-center w-1/3 border border-border p-1 rounded-lg hover:scale-105 ease-in duration-200 hover:shadow-border hover:shadow m-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-3 bg-transparent"
                    >
                      GITHUB
                      <FaGithub />
                    </a>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        <a
          href="https://github.com/Kevetic"
          target="_blank"
          className="z-50 text-lg text-span-blue underline w-full m-auto text-center"
        >
          Find more of my projects on my GitHub
        </a>
      </div>
    </motion.div>
  );
}
