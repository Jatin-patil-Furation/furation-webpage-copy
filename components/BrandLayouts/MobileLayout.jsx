import React from "react";
import BrandCard from "../BrandCard";
import { images } from "@/public/assets";

const MobileLayout = () => {
  return (
    <div className=" flex sm:hidden md:hidden lg:hidden xl:hidden justify-center scale-75  w-[90%] h-full">
      {/* 5  rows */}
      <div className="mt-10">
        <BrandCard image={images.sikkaPlay} />
        <BrandCard image={images.akina} />
        <BrandCard image={images.alba} />
        <BrandCard image={images.bg} />
        <BrandCard image={images.flyer} />
        <BrandCard image={images.ginko} />
        <BrandCard image={images.reserve} />
      </div>

      {/* 6  rows */}
      <div>
        <BrandCard image={images.gupta} />
        {/* <BrandCard image={images.guptaApp} /> */}
        <BrandCard image={images.kuwaiti} />
        <BrandCard image={images.pritam} />
        <BrandCard image={images.qinling} />
        <BrandCard image={images.quattro} />
        <BrandCard image={images.agentrider} />
      </div>

      {/* 5  rows */}
      <div className="mt-10">
        <BrandCard image={images.fantomPlay} />
        <BrandCard image={images.taftoon} />
        <BrandCard image={images.tft} />
        <BrandCard image={images.trp} />
        <BrandCard image={images.wwi} />
        <BrandCard image={images.estella} />
        {/* <BrandCard image={images.guptaApp} /> */}
      </div>
    </div>
  );
};

export default MobileLayout;
