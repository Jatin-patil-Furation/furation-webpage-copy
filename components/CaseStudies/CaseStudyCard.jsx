import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudyCard = ({ data }) => {
  return (
    <div className="flex flex-col rounded-t-lg h-auto w-[400px] bg-[#1A1A1A]">
      <div className="w-full h-56">
        <Image
          src={data.image}
          height={100}
          width={100}
          className="h-full w-full rounded-t-lg"
        />
      </div>
      <div className="text-xl p-4">
        <h3>{data.heading}</h3>
        <p className="mt-3 font-light opacity-70 text-base line-clamp-3">
          {data.description}
        </p>
      </div>
      <div className="p-4">
        <Link
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
        >
          <p className="text-primary hover:text-card2 underline">
            View Case Study
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
