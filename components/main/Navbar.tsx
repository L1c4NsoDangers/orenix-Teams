"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const socialIcons = [
  {
    id: "facebook",
    icon: <FaFacebookSquare className="w-10 h-10 text-[#FF8C00] " />,
  },
  {
    id: "instagram",
    icon: <FaInstagramSquare className="w-10 h-10 text-[#FF8C00] " />,
  },
  {
    id: "thread",
    icon: <FaSquareThreads className="w-10 h-10 text-[#FF8C00] " />,
  },
  {
    id: "linkedin",
    icon: <FaLinkedin className="w-10 h-10 text-[#FF8C00] " />,
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MotionLink = motion(Link);
  const MotionImage = motion(Image); // Wrapping Image with motion

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 bg-[#03001417] backdrop-blur-md transition-all ${
          scrollActive ? "shadow-lg shadow-[#FF8C00]/50 py-2" : "py-2"
        }`}
      >
        <nav className="max-w-screen-xl px-4 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <MotionLink href="/">
              <MotionImage
                src="/ORENIX.png" // Path ke logo Anda
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer"
                whileHover={{
                  filter: [
                    "hue-rotate(0deg)",
                    "hue-rotate(90deg)",
                    "hue-rotate(180deg)",
                    "hue-rotate(270deg)",
                    "hue-rotate(360deg)",
                  ],
                  transition: { duration: 1, repeat: Infinity },
                }}
              />
            </MotionLink>
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              oreniX Team
            </span>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-gray-300 items-center">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "home"
                  ? "text-[#FF8C00] shadow-[#FF8C00]"
                  : "text-[#FF8C00] font-bold hover:text-white"
              }`}
            >
              <Link href="/" onClick={() => setActiveLink("Home")}>
                Home
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "Members"
                  ? "text-[#FF8C00] shadow-[#FF8C00]"
                  : "text-[#FF8C00] font-bold hover:text-white"
              }`}
            >
              <Link href="members" onClick={() => setActiveLink("Members")}>
                Members
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "Competitions"
                  ? "text-[#FF8C00] shadow-[#FF8C00]"
                  : "text-[#FF8C00] font-bold hover:text-white"
              }`}
            >
              <Link
                href="competitions"
                onClick={() => setActiveLink("Competitions")}
              >
                Competitions
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "Blogs"
                  ? "text-[#FF8C00] shadow-[#FF8C00]"
                  : "text-[#FF8C00] font-bold hover:text-white"
              }`}
            >
              <Link href="blogs" onClick={() => setActiveLink("blogs")}>
                Blogs
              </Link>
            </li>
          </ul>
          <div className="col-start-10 col-end-12 flex gap-5 justify-center items-center">
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -360,
                    borderRadius: "100%",
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t bg-[#03001417] backdrop-blur-md">
        <div className="sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-gray-300">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "Home"
                  ? "text-[#FF8C00] shadow-[#FF8C00]"
                  : "text-[#FF8C00] font-bold hover:text-white"
              }`}
            >
              <Link href="/" onClick={() => setActiveLink("Home")}>
                Home
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "Members"
                  ? "text-[#FF8C00] shadow-[#FF8C00]"
                  : "text-[#FF8C00] font-bold hover:text-white"
              }`}
            >
              <Link href="members" onClick={() => setActiveLink("Members")}>
                Members
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "Competitions"
                  ? "text-[#FF8C00] shadow-[#FF8C00]"
                  : "text-[#FF8C00] font-bold hover:text-white"
              }`}
            >
              <Link
                href="competitions"
                onClick={() => setActiveLink("Competitions")}
              >
                Competitions
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative ${
                activeLink === "Blogs"
                  ? "text-[#FF8C00] shadow-[#FF8C00]"
                  : "text-[#FF8C00] font-bold hover:text-white"
              }`}
            >
              <Link href="blogs" onClick={() => setActiveLink("Blogs")}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
