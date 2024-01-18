import Image from "next/image";
import React from "react";
import "./styles.css";

const AdvantageCard = (props) => {
  const { data } = props;

  return (
    <div className=" w-[476px] h-auto border border-[#A5A5A5] rounded-2xl p-4">
      <Image
        src={data.icon}
        height={40}
        width={40}
        alt={`advantage${data.id}`}
        className="mb-2"
      />
      <p className="largeText opacity-[70%]">{data.content}</p>
    </div>
  );
};

export default AdvantageCard;
