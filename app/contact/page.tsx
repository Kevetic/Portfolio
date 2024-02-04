"use client";
import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: -500,
    x: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

let socials = [
  {
    social: "Github",
    link: "https://github.com/Kevetic",
    icon: <GitHubLogoIcon width={50} height={50} />,
  },
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/kevetic/",
    icon: <LinkedInLogoIcon width={50} height={50} />,
  },
  {
    social: "Email",
    link: "kevetic@outlook.com",
    icon: <EnvelopeClosedIcon width={50} height={50} />,
  },
];
function ContactPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.4, type: "spring" }}
      className="flex flex-col sm:flex-row justify-around items-center min-h-[800px] w-full"
    >
      {socials.map((social, i) => {
        return (
          <motion.div key={i} variants={defaultAnimations}>
            <Link
              href={social.link}
              className="min-h-[200px] text-center p-10 hover:scale-105 transition-all duration-300 flex flex-col justify-center items-center sm:border sm:p-20 sm:rounded-lg hover:shadow-primary hover:text-primary hover:shadow-sm"
            >
              {social.icon}
              <div>{social.social}</div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ContactPage;
