"use client";
import React, { useEffect, useState } from "react";
import { color, motion, useAnimate } from "framer-motion";

function ProjectSelectors({
  name,
  project,
  handleSelectedProject,
  setCurrentProject,
}: any) {
  const [scope, animate] = useAnimate();

  const onTapStart = async () => {
    await animate(
      "div",
      { opacity: 1, x: -10 },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "div",
      { opacity: 1, x: 0 },
      { duration: 0.3, type: "spring", ease: "easeInOut", delay: 0.2 }
    );
  };

  const handleOnClick = async () => {
    handleSelectedProject(project.projectName);
    await setCurrentProject(null);
    setTimeout(() => {
      setCurrentProject(project);
    }, 100);
  };
  return (
    <div className="relative w-full m-auto" ref={scope}>
      <motion.div
        id={project.id}
        onTapStart={onTapStart}
        onClick={() => {
          handleOnClick();
        }}
        className={`${
          project.selected ? "bg-primary" : "bg-secondary"
        } border p-2 rounded-xl min-w-[200px] max-w-[200px] text-center m-4`}
      >
        {name}
      </motion.div>
    </div>
  );
}

export default ProjectSelectors;
