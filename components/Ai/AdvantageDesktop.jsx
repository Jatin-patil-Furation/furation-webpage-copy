"use client";

import { images } from "@/public/assets";
import React, { useEffect, useState } from "react";
import AdvantageCard from "./AdvantageCard";

const AdvantageDesktop = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, heading: "Task Magic with AI" },
    { id: 2, heading: "Data Insight Wizard" },
    { id: 3, heading: "Customer Happiness Guru" },
    { id: 4, heading: "Opportunity Navigator" },
  ];

  const tabContent = {
    1: {
      id: 1,
      icon: images.aiAdv1,
      content:
        "AI takes the lead in automating tasks, freeing up resources and supercharging your productivity effortlessly.",
    },
    2: {
      id: 2,
      icon: images.aiAdv2,
      content:
        "AI delves into data, uncovering valuable insights to guide smarter decisions, assisting you in navigating with clear understanding.",
    },
    3: {
      id: 3,
      icon: images.aiAdv3,
      content:
        "With AI, tailor interactions for satisfaction and loyalty, creating standout experiences that leave a lasting impression.",
    },
    4: {
      id: 4,
      icon: images.aiAdv4,
      content:
        "With AI, adapt quickly, seize opportunities, and outshine the competition in today's ever-changing business world.",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next tab index
      const nextTab = (activeTab % 4) + 1;
      setActiveTab(nextTab);
    }, 1800);

    return () => clearTimeout(timer); // Clear the timeout when the component unmounts or the active tab changes
  }, [activeTab]);

  return (
    <div className="bg-aiPrimary md:grid grid-cols-1 md:grid-cols-2 hidden">
      <div className="p-6 border-r border-white border-opacity-[12%] flex flex-col gap-8 ">
        {tabs.map((tab) => {
          return (
            <h3
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-white opacity-[70%]"
              } heading3 cursor-pointer`}
            >
              {tab.heading}
            </h3>
          );
        })}

        {/* <h3
          className={`${
            isActive ? "text-white" : "text-white opacity-[80%]"
          } heading3`}
        >
          Data Insight Guru
        </h3>
        <h3
          className={`${
            isActive ? "text-white" : "text-white opacity-[80%]"
          } heading3`}
        >
          CX Enhancer
        </h3>
        <h3
          className={`${
            isActive ? "text-white" : "text-white opacity-[80%]"
          } heading3`}
        >
          Competition Crusher
        </h3> */}
      </div>
      <div className="flex justify-center items-center px-[46px]">
        {/* {tabContent.map((content) => {
          return <AdvantageCard key={content.id} data={content} />;
        })} */}
        <AdvantageCard
          key={tabContent[activeTab]?.id}
          data={tabContent[activeTab]}
        />
      </div>
    </div>
  );
};

export default AdvantageDesktop;
