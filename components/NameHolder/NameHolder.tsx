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
      { duration: 0.3, type: "spring", ease: "linear", delay: 1 }
    );
    animate(
      "span",
      { opacity: 1, x: 50, width: "29.5%" },
      { duration: 0.3, type: "spring", ease: "linear" }
    );
    await animate(
      "span",
      { opacity: 1, x: 500, width: "1px" },
      { duration: 0.3, type: "spring", ease: "linear" }
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
      { duration: 0.3, type: "spring", ease: "linear" }
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
      { duration: 0.3, type: "spring", ease: "linear" }
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
      { duration: 0.3, type: "spring", ease: "linear" }
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
      { duration: 0.3, type: "spring", ease: "linear" }
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
      { duration: 0.3, type: "spring", ease: "linear" }
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
      { duration: 0.3, type: "spring", ease: "linear" }
    );
    await animate(
      "span",
      {
        opacity: 1,
        width: "100%",
        x: 0,
      },
      { duration: 0.3, type: "spring", ease: "linear" }
    );
  };
  useEffect(() => {
    handleBorderAnimation();
  });

  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen absolute -top-24">
      <motion.div
        className="flex gap-3 p-5 z-10 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <Link
          className="hover:text-primary hover:animate-pulse hover:scale-110 transition-all ease-in-out"
          href={"/projects"}
        >
          PROJECTS
        </Link>{" "}
        |{" "}
        <Link
          className="hover:text-primary hover:animate-pulse hover:scale-105 transition-all ease-in-out"
          href={"/contact"}
        >
          CONTACT
        </Link>
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
              transition={{ ease: "linear" }}
              className={`${caveat.className} text-8xl sm:text-9x`}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
        <motion.div ref={scope} className="w-full hidden sm:flex">
          <motion.span className="border border-red-500 lg:flex absolute hidden"></motion.span>
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
