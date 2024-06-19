"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const ContestText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#FF8C00] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#ffffff] mr-[10px] h-5 w-5" />
        <h1 className="text-[#ffffff] text-[13px]">
          Let&apos;s Catch The Flags!
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Competitions we have participated in.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        ALWAYS READY, ALWAYS AHEAD
      </motion.div>
    </div>
  );
};

export default ContestText;
