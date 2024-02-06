import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Button } from "../ui/button";

function CurrentDisplay({ currentProject }) {
  console.log(currentProject);
  return (
    <>
      <motion.div
        className="w-full border rounded-xl p-2 max-h-[500px] min-h-[500px]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: easeInOut,
          type: "spring",
          duration: 2,
        }}
      >
        <h1 className="text-4xl p-2 w-full">{currentProject.projectName}</h1>
        <motion.div
          className="w-11/12 flex"
          animate={{ opacity: 1, transition: easeInOut }}
        >
          <video
            width="50%"
            height="80%"
            loop
            autoPlay={true}
            playsInline
            muted
            src={currentProject.demo}
          />
          <div className="flex flex-col">
            <h1 className="p-5">{currentProject.summary}</h1>
            <div className="flex justify-end items-end gap-4 bottom-0">
              <Button>TEST</Button>
              <Button>TEST</Button>
            </div>
          </div>
        </motion.div>
        <div className="flex gap-4">
          {currentProject.stacks?.map((x, i) => {
            return (
              <p
                key={i}
                className="p-1 rounded-full border text-xs bg-foreground"
              >
                {x}
              </p>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default CurrentDisplay;
