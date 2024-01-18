import Image from "next/image";
import React from "react";

const FnBClientCard = ({ img }) => {
  return (
    <div className="h-[100px] w-[186px] md:h-[136px] md:w-[222px] p-2 bg-[#1A1A1A] rounded-lg flex justify-center items-center">
      <Image
        src={img}
        height={100}
        width={100}
        className="h-2/3 w-2/3"
        alt="client image"
      />
    </div>
  );
};

export default FnBClientCard;
