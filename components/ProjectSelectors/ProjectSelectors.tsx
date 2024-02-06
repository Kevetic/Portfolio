"use client";
import React from "react";
import { motion, useAnimate } from "framer-motion";

function ProjectSelectors({ name, project, setCurrentProject, id }: any) {
  const [scope, animate] = useAnimate();

  const onTapStart = async () => {
    await animate(
      "div",
      { opacity: 1, x: -10, y: 5 },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "div",
      { opacity: 1, x: 0, y: 0 },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
  };

  const handleSelectedProject = async () => {
    await setCurrentProject(null);
    await setCurrentProject(project);
  };

  return (
    <>
      <div className="relative" ref={scope}>
        <motion.div
          id={project.id}
          onTapStart={onTapStart}
          onClick={() => handleSelectedProject()}
          className="border p-2 rounded-xl min-w-[200px] max-w-[200px] text-center"
        >
          {name}
        </motion.div>
      </div>
    </>
  );
}

export default ProjectSelectors;
