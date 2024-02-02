"use client";
import { Caveat } from "next/font/google";
import { motion } from "framer-motion";

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
  return (
    <>
      <motion.div
        className={`${caveat.className} text-red-800 flex absolute`}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        {name.map((char, i) => (
          <motion.div
            key={i}
            variants={defaultAnimations}
            className={`${caveat.className} text-red-800 text-9xl`}
          >
            {char}
          </motion.div>
        ))}
      </motion.div>
      <motion.div className={`${caveat.className} text-white text-9xl`}>
        KEVETIC
      </motion.div>
    </>
  );
};

export default NameHolder;
