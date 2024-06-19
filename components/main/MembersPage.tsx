"use client";

import React from "react";
import { motion } from "framer-motion";
import MembersText from "../sub/MembersText";
import MembersDataProvider from "../sub/MembersDataProvider";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const MembersPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 mt-20"
      style={{ transform: "scale(0.9)" }}
    >
      <motion.div variants={slideInFromTop}>
        <MembersText />
      </motion.div>
      <div className="flex flex-col items-center justify-center " id="projects">
        <div className="h-full w-full flex flex-wrap justify-center gap-10 px-10">
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromLeft(0.2)}
          >
            <MembersDataProvider
              src="/i42tu.png"
              name="I42TU"
              focus1="WEB"
              focus2="PWN"
              description="FOUNDER oreniX TEAM"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromRight(0.3)}
          >
            <MembersDataProvider
              src="/NKRT.png"
              name="NRKT"
              focus1="CRYPTO"
              focus2="FOREN"
              description="SLEEP AUTO MODE"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={slideInFromRight(0.3)}
          >
            <MembersDataProvider
              src="/Kuroneko.png"
              name="KURONEKO"
              focus1="FOREN"
              focus2="MISC"
              description="MIE AYAM LEZAT"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MembersPage;
