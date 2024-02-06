import React from "react";
import { motion } from "framer-motion";

function CurrentDisplay({ currentProject }) {
  console.log(currentProject);
  return (
    <>
      <motion.div className="w-full border rounded-xl flex justify-between p-2">
        <div className="w-11/12">
          <h1 className="text-4xl p-2 w-11/12">{currentProject.projectName}</h1>
          <video
            width="80%"
            height="80%"
            loop
            autoPlay={true}
            playsInline
            muted
            src={currentProject.demo}
          />
          <h1 className="p-5">{currentProject.summary}</h1>
        </div>
      </motion.div>
    </>
  );
}

export default CurrentDisplay;
