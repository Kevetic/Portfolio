import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: "400" });

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

function CurrentDisplay({ currentProject }) {
  return (
    <>
      <motion.div
        className="w-full rounded-xl p-4 max-h-[900px] min-h-[900px] border"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: easeInOut,
          type: "spring",
        }}
      >
        <h1 className={`${caveat.className} text-8xl relative`}>
          {currentProject.projectName}
        </h1>
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
            <h1 className="p-5 text-xs">{currentProject.summary}</h1>
          </div>
        </motion.div>
        <div className="flex gap-4 justify-between items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, type: "spring" }}
            className="flex gap-4"
          >
            <h1 className={`${caveat.className}`}>TOOLS:</h1>
            {currentProject.stacks?.map((x, i) => {
              return (
                <motion.div key={i} variants={defaultAnimations}>
                  <Badge
                    variant="outline"
                    className="Badge-1 rounded-full border text-xs font-thin bg-muted"
                  >
                    {x}
                  </Badge>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="flex gap-5">
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Link href={currentProject.projectLink}>
                <Button>Demo</Button>
              </Link>
            </motion.div>
            {currentProject.github && (
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <Link href={currentProject.github}>
                  <Button>Github</Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CurrentDisplay;
