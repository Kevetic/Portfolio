"use client";
import React from "react";
import { motion, useAnimate } from "framer-motion";
function ProjectCard({ name, project, setCurrentProject, id }: any) {
  const [scope, animate] = useAnimate();

  const onTapStart = async () => {
    await animate(
      "div",
      { opacity: 1, x: -10, y: 10, background: "red" },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "div",
      { opacity: 1, x: 0, y: 0 },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
  };

  return (
    <>
      <div className="relative" ref={scope}>
        <motion.div
          id={project.id}
          onTapStart={onTapStart}
          onClick={() => setCurrentProject(project)}
          className={`border p-2 rounded-xl min-w-[200px] max-w-[200px] `}
        >
          {name}
        </motion.div>
      </div>
    </>
  );
}

export default ProjectCard;
