import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

function MobileProjects({ summary, link, github, styles, demo, name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lg:hidden flex flex-col">
      <h1 className="text-center m-10">{name}</h1>
      <div className="relative">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            width="100%"
            height="260"
            loop
            autoPlay={true}
            webkit-playsInline={true}
            playsInline
            muted
            className={`${
              isHovered ? "opacity-0" : null
            } transition-all ease-in-out`}
          >
            <source src={demo} type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${
            isHovered ? "opacity-1" : "opacity-0"
          } transition-all ease-in-out`}
        >
          <Card className={styles}>
            <CardHeader>
              <CardDescription className="w-full p-2 text-center md:text-xs">
                {summary}
              </CardDescription>
            </CardHeader>
            <CardFooter className=" justify-around">
              {github ? (
                <Link href={github}>
                  <Button>Github</Button>
                </Link>
              ) : null}
              <Link href={link}>
                <Button>Demo</Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default MobileProjects;
