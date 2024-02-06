import React from "react";
import CurrentDisplay from "../CurrentDisplay/CurrentDisplay";
import { motion } from "framer-motion";
import ProjectSelectors from "../ProjectSelectors/ProjectSelectors";

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

function SelectedProject({
  currentProject,
  projectArray,
  setCurrentProject,
  handleSelectedProject,
}) {
  return (
    <>
      <div className="lg:flex hidden w-full justify-end items-center">
        {currentProject ? (
          <CurrentDisplay currentProject={currentProject} />
        ) : null}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2, type: "spring" }}
          className="gap-2relative items-end flex flex-col justify-end"
        >
          {projectArray.map((project, i) => (
            <motion.div key={i} variants={defaultAnimations} className="m-8">
              <ProjectSelectors
                defaultAnimations={defaultAnimations}
                handleSelectedProject={handleSelectedProject}
                setCurrentProject={setCurrentProject}
                currentProject={currentProject}
                project={project}
                demo={project.demo}
                name={project.projectName}
                image={project.image}
                summary={project.summary}
                link={project.projectLink}
                github={project.github}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default SelectedProject;
