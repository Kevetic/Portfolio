"use client";
import React, { useState } from "react";

import { motion, useAnimate } from "framer-motion";

import { Button } from "../ui/button";
import Link from "next/link";
function ProjectCard({
  summary,
  link,
  github,
  styles,
  demo,
  name,
  project,
  setCurrentProject,
}: any) {
  const [scope, animate] = useAnimate();

  const onTapStart = async () => {
    await animate(
      "div",
      { opacity: 1, x: -100 },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "div",
      { opacity: 1, x: 0 },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
  };

  return (
    <>
      <div className="relative" ref={scope}>
        <motion.div
          onTapStart={onTapStart}
          onClick={() => setCurrentProject(project)}
          className="border p-2 rounded-xl min-w-[200px] max-w-[200px]"
        >
          {name}
        </motion.div>
      </div>
    </>
  );
}

export default ProjectCard;
