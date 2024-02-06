import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function CurrentDisplay({ currentProject }) {
  return (
    <>
      <motion.div
        className="w-full border rounded-xl p-2 max-h-[800px] min-h-[800px]"
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
          </div>
        </motion.div>
        <div className="flex gap-4 justify-between items-center">
          <div>
            {currentProject.stacks?.map((x, i) => {
              return (
                <Badge
                  variant="outline"
                  key={i}
                  className="Badge-1 rounded-full border text-xs bg-foreground"
                >
                  {x}
                </Badge>
              );
            })}
          </div>
          <div className="flex gap-5">
            <Link href={currentProject.projectLink}>
              <Button>Demo</Button>
            </Link>
            {currentProject.github && (
              <Link href={currentProject.github}>
                <Button>Github</Button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CurrentDisplay;
