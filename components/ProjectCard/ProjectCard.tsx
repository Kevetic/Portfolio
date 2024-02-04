"use client";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectCard({ summary, link, github, styles, demo, name }: any) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <h1 className="text-center m-10">{name}</h1>
      <div className="relative max-h-[300px] m-8">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            width="100%"
            height="260"
            loop
            autoPlay={true}
            webkit-playsinline
            playsinline
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
    </>
  );
}

export default ProjectCard;
