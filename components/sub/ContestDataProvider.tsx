"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  information: String;
  ranking: string;
  rating: string;
  point: string;
}

const ContestDataProvider = ({
  src,
  title,
  ranking,
  rating,
  point,
  information,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#FF8C00] ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <div className="flex w-full gap-3 justify-start">
          <div className="py-2 px-2 bg-gradient-to-r from-[#000080] to-[#FF8C00] text-center text-white rounded-lg max-w-[200px]">
            Until: {information}
          </div>
          <div className="py-2 px-2 bg-gradient-to-r from-[#000080] to-[#FF8C00] text-center text-white rounded-lg max-w-[200px]">
            Rank: {ranking}
          </div>
          <div className="py-2 px-2 bg-gradient-to-r from-[#000080] to-[#FF8C00] text-center text-white rounded-lg max-w-[200px]">
            Rating: {rating}
          </div>
          <div className="py-2 px-2 bg-gradient-to-r from-[#000080] to-[#FF8C00] text-center text-white rounded-lg max-w-[200px]">
            Point: {point}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDataProvider;
