import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import "./styles.css";

const HeroCard = (props) => {
  const { data } = props;

  return (
    <div className="h-[203px] w-full lg:h-[153px] lg:w-[246px] xl:h-[203px] xl:w-[296px]">
      <div className=" w-full flex justify-center mb-[10px]">
        <Image src={data.icon} height={40} width={40} alt={data.heading} />
      </div>
      <div>
        <h2 className="secondaryHeading text-center mb-[10px]">
          {data.heading}
        </h2>
        {/* <p className="largeText text-center">
          <span>of C-level execs</span>
          <br />
          <span>see AI as essential for growth</span>
        </p> */}
        <p className="largeText text-center">{data.content}</p>
      </div>
    </div>
  );
};

export default HeroCard;
