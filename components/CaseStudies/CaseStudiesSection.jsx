import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import { images } from "@/public/assets";

const CaseStudiesSection = () => {
  const data = [
    {
      id: 1,
      heading: "Food & Beverages",
      description:
        "The food and beverage (F&B) industry is undergoing a digital transformation, and businesses are seeking innovative solutions to streamline operations and improve customer experience",
      image: images.fnbCaseStudy,
      // link: "https://furation-tech-solutions-assets.s3.ap-south-1.amazonaws.com/f_and_b_case_study.pdf",
      link: "/case-study/fnb",
    },
    {
      id: 2,
      heading: "WWI Virtual Academy",
      description:
        "We designed a digital ed-tech store web app for WWI Virtual Academy. To develop the web app , we underwent a series of challenges, and our team beautifully came up with excellent solutions, building the final version of the WWI Virtual Academy App!",
      image: images.wwiCaseStudy,
      // link: "https://furation-tech-solutions-assets.s3.ap-south-1.amazonaws.com/wwi_case_study.pdf",
      link: "/case-study/wwi",
    },
  ];

  return (
    <>
      <h2 className="text-white max-w-[70%] md:max-w-[60%] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-14 md:mb-16 lg:mb-20  text-center">
        Case Studies
      </h2>
      <div className="text-white flex gap-10 md:gap-5 flex-wrap justify-evenly w-[90%]">
        {data.map((card) => {
          return <CaseStudyCard key={card.id} data={card} />;
        })}
      </div>
    </>
  );
};

export default CaseStudiesSection;
