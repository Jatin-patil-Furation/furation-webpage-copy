"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const BrandCard = ({ image, bg, isActive }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: isActive ? "#EF3239" : "#212121a6",
          transition: "1.5s ease", // Specify the transition property and duration
        }}
        className={` h-[140px] w-[140px] md:h-[170px] md:w-[170px] rounded-[20px] grid grid-cols-2 relative  mr-2 mb-2 p-0  overflow-hidden`}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          data-aos-delay="50"
          data-aos-anchor-placement="top-bottom"
          className={`${isActive ? "" : "bg-[#212121a6]"} `}
          style={
            {
              // backgroundColor: isActive ? "#EF3239" : "#212121a6",
            }
          }
        ></div>
        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className={`${isActive ? "" : "bg-[#212121a6]"} `}
          style={
            {
              // backgroundColor: isActive ? "#EF3239" : "#212121a6",
            }
          }
        ></div>
        <Image
          // height={40}
          // width={40}
          style={{ height: "90px", width: "100px" }}
          data-aos="fade-in"
          data-aos-duration="4000"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          className="absolute align-middle self-center justify-self-center"
          src={image}
          alt=""
        />
      </div>
    </>
  );
};

export default BrandCard;
