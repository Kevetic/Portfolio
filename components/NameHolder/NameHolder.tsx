"use client";
import { useEffect, useState } from "react";
import { Caveat } from "next/font/google";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"], weight: "700" });

let name = ["K", "E", "V", "E", "T", "I", "C"];
const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
    x: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};
export const NameHolder = () => {
  const [scope, animate] = useAnimate();

  const handleBorderAnimation = async () => {
    await animate(
      "span",
      { opacity: 1, width: "100%" },
      { duration: 0.3, type: "spring", ease: "easeInOut", delay: 1 }
    );
    animate(
      "span",
      { opacity: 1, x: 50, width: "29.5%" },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "span",
      { opacity: 1, x: 500, width: "1px" },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "span",
      {
        opacity: 1,
        x: 500,
        y: -180,
        height: "180px",
        width: "1px",
      },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "span",
      {
        opacity: 1,
        x: 500,
        y: -180,
        height: "1px",
        width: "1px",
      },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "span",
      {
        opacity: 1,
        x: 0,
        y: -180,
        height: "1px",
        width: "100%",
      },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "span",
      {
        opacity: 1,
        x: 0,
        y: -180,
        height: "1px",
        width: "1px",
      },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "span",
      {
        opacity: 1,
        x: 0,
        y: -180,
        height: "180px",
        width: "1px",
      },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "span",
      {
        opacity: 1,
        x: 0,
        y: 0,
        height: "1px",
        width: "1px",
      },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
    await animate(
      "span",
      {
        opacity: 1,
        width: "100%",
        x: 0,
      },
      { duration: 0.3, type: "spring", ease: "easeInOut" }
    );
  };
  useEffect(() => {
    handleBorderAnimation();
  });

  return (
    <div className="w-screen flex flex-col justify-center items-center h-[500px] sm:h-[1000px]">
      <motion.div
        className="flex gap-3 p-5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <Link href={"/projects"}>PROJECTS</Link> |{" "}
        <Link href={"/contact"}>CONTACT</Link>
      </motion.div>
      <div className="relative">
        <motion.div
          className={`${caveat.className} flex`}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.4, type: "spring" }}
        >
          {name.map((char, i) => (
            <motion.div
              key={i}
              variants={defaultAnimations}
              className={`${caveat.className} text-8xl sm:text-9xl`}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
        <motion.div ref={scope} className="w-full hidden sm:flex">
          <motion.span className="border border-red-500 md:flex absolute hidden"></motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 3 }}
        >
          Frontend Developer
        </motion.div>
      </div>
    </div>
  );
};

export default NameHolder;
