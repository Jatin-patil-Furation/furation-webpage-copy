import React from "react";
import "./styles.css";
import { images } from "@/public/assets";
import Image from "next/image";

const AdvantageMobile = () => {
  const content = [
    {
      id: 1,
      heading: "Task Magic with AI",
      icon: images.aiAdv1,
      content:
        "AI takes the lead in automating tasks, freeing up resources and supercharging your productivity effortlessly.",
    },
    {
      id: 2,
      heading: "Date Insight Wizard",
      icon: images.aiAdv2,
      content:
        "AI delves into data, uncovering valuable insights to guide smarter decisions, assisting you in navigating with clear understanding.",
    },
    {
      id: 3,
      heading: "Customer Happiness Guru",
      icon: images.aiAdv3,
      content:
        "With AI, tailor interactions for satisfaction and loyalty, creating standout experiences that leave a lasting impression.",
    },
    {
      id: 4,
      heading: "Opportunity Navigator",
      icon: images.aiAdv4,
      content:
        "With AI, adapt quickly, seize opportunities, and outshine the competition in today's ever-changing business world.",
    },
  ];

  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col gap-14 md:hidden">
        {content.map((item) => {
          return (
            <div className="" key={item.id}>
              <Image
                src={item.icon}
                alt={item.heading}
                height={40}
                width={40}
              />
              <h3 className="heading3 my-4">{item.heading}</h3>
              <p className="largeText">{item.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdvantageMobile;
