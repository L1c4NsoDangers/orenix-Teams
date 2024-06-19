"use client";

import React from "react";
import { motion } from "framer-motion";
import ContestText from "../sub/ContestText";
import ContestDataProvider from "../sub/ContestDataProvider";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const ContestPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40"
      style={{ transform: "scale(0.9)" }}
    >
      <motion.div variants={slideInFromTop}>
        <ContestText />
      </motion.div>
      <div className="flex flex-col items-center justify-center " id="projects">
        <div className="h-full w-full flex flex-wrap justify-center gap-10 px-10">
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromLeft(0.2)}
          >
            <ContestDataProvider
              src="/gemas2022.png"
              title="GEMASTIK 2022"
              information="Qualification"
              ranking="???"
              rating="???"
              point="???"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromRight(0.3)}
          >
            <ContestDataProvider
              src="/gemas2023.png"
              title="Gemastik 2023"
              information="Qualification"
              ranking="???"
              rating="???"
              point="???"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromLeft(0.4)}
          >
            <ContestDataProvider
              src="/cjawa2022.png"
              title="Cyber Jawara 2022"
              information="Qualification"
              ranking="???"
              rating="???"
              point="400"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromRight(0.5)}
          >
            <ContestDataProvider
              src="/cjawa2023.png"
              title="Cyber Jawara 2023"
              information="Qualification"
              ranking="???"
              rating="???"
              point="???"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromLeft(0.6)}
          >
            <ContestDataProvider
              src="/Ucon2022.png"
              title="Uconnect 2022"
              information="Qualification"
              ranking="???"
              rating="???"
              point="1200"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromRight(0.7)}
          >
            <ContestDataProvider
              src="/Ucon2023.png"
              title="Uconnect 2023"
              information="Final"
              ranking="???"
              rating="???"
              point="800"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromLeft(0.8)}
          >
            <ContestDataProvider
              src="/hkt2023.png"
              title="Healthkathon 2023"
              information="Qualification"
              ranking="???"
              rating="???"
              point="???"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromRight(0.9)}
          >
            <ContestDataProvider
              src="/0byte.png"
              title="0BYTE 2023"
              information="Final"
              ranking="???"
              rating="???"
              point="???"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromLeft(1)}
          >
            <ContestDataProvider
              src="/festi.png"
              title="FESTI 2024"
              information="Final"
              ranking="4"
              rating="???"
              point="2988"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContestPage;
