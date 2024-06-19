"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  name: string;
  focus1: String;
  focus2: string;
  description: string;
}

const MembersDataProvider = ({
  src,
  name,
  focus1,
  focus2,
  description,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#FF8C00] ">
      <Image
        src={src}
        alt={name}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{name}</h1>
        <div className="flex w-full gap-3 justify-start">
          <div className="py-2 px-2 bg-gradient-to-r from-[#FF8C00] to-[#000080] text-center text-white rounded-lg max-w-[200px]">
            {focus1}
          </div>
          <div className="py-2 px-2 bg-gradient-to-r from-[#FF8C00] to-[#000080] text-center text-white rounded-lg max-w-[200px]">
            {focus2}
          </div>
        </div>
        <div className="pt-2 text-white rounded-lg max-w-[200px]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MembersDataProvider;
