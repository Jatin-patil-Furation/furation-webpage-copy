import Image from "next/image";
import React from "react";

const WwiTechCard = ({ img }) => {
  return (
    <div className="flex justify-center items-center w-[222px] h-[136px] rounded-lg bg-[#303030]">
      <Image
        src={img}
        height={100}
        width={100}
        className="h-16 w-16"
        alt="tech stack"
      />
    </div>
  );
};

export default WwiTechCard;
