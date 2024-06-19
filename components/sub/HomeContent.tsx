"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HomeContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center lg:px-20 mt-40 lg:mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto lg:items-start items-center text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#FF8C00] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#ffffff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Capture The Flags Team</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            ALWAYS
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000080] to-[#FF8C00]">
              {" "}
              READY{" "}
            </span>
            ALWAYS AHEAD
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          We are a Cybersecurity Specialist with expertise in CTF challenges and
          securing digital environments. Let&apos;s catch the Flags.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="/" // Ganti "/your-link-here" dengan tautan yang diinginkan
          className="py-2 px-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Join With Us!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image src="/materials.svg" alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HomeContent;
