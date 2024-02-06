"use client";
import React, { useEffect, useState } from "react";
import { color, motion, useAnimate } from "framer-motion";

function ProjectSelectors({
  name,
  project,
  setCurrentProject,
  currentProject,
  id,
}: any) {
  const [scope, animate] = useAnimate();
  const [colorChange, setColorChange] = useState((project.selected = false));

  useEffect(() => {
    handleSelectedProject();
  }, [colorChange]);

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

  const handleSelectedProject = async (id) => {
    await setCurrentProject(null);
    await setCurrentProject(project);

    if (id === currentProject.id) {
      setColorChange((project.selected = true));
      console.log("true");
    } else {
      setColorChange((project.selected = false));
    }
  };

  return (
    <>
      <div className="relative w-full m-auto" ref={scope}>
        <motion.div
          id={project.id}
          onTapStart={onTapStart}
          onClick={() => handleSelectedProject(id)}
          className={`${
            project.selected ? "bg-red-500" : "bg-secondary"
          } border p-2 rounded-xl min-w-[200px] max-w-[200px] text-center m-4`}
        >
          {name}
        </motion.div>
      </div>
    </>
  );
}

export default ProjectSelectors;
