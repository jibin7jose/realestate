"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

type Props = {
  building: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const BuildingFeatureCard = ({ building }: Props) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable={true}
      glareColor="rgba(255,255,255,0.2)"
      className="rounded-xl shadow-lg bg-white p-6 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        {/* Image inside circular background */}
        <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mb-4">
          <Image
            src={building.image}
            alt={building.title}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Text section */}
        <p className="text-red-600 font-bold text-lg mb-1">
          0{building.id}
        </p>
        <h3 className="text-gray-800 font-semibold text-xl mb-2">
          {building.title}
        </h3>
        <p className="text-gray-600 text-sm opacity-80 leading-relaxed">
          {building.description}
        </p>
      </div>
    </Tilt>
  );
};

export default BuildingFeatureCard;
