import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";

const TechStackSection = () => {
  const techStack = [
    {
      id: 1,
      name: "Firebase",
      icon: images.wwi_firebase,
    },
    {
      id: 2,
      name: "Label Studio",
      icon: images.aiTechLabelStudio,
    },
    {
      id: 3,
      name: "PyTorch",
      icon: images.aiTechPyTorch,
    },
    {
      id: 4,
      name: "Roboflow",
      icon: images.aiTechRoboflow,
    },
    {
      id: 5,
      name: "mlflow",
      icon: images.aiTechMlFlow,
    },
    {
      id: 6,
      name: "BentoML",
      icon: images.aiTechBento,
    },
    {
      id: 7,
      name: "Docker",
      icon: images.aiTechDocker,
    },
    {
      id: 8,
      name: "Weights & Biases",
      icon: images.aiTechWtBiases,
    },
  ];

  return (
    <section className="text-white mt-20 mb-[100px] md:mb-[150px] lg:mb-[219px] ">
      <div className="w-[95%] md:w-[85%] mx-auto mb-[102px]">
        <h2 className="secondaryHeading text-center">Our Tech Stack</h2>
      </div>

      <div className="w-[95%] md:w-[85%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-16">
          {techStack.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex justify-center items-center">
                  <Image
                    src={item.icon}
                    height={64}
                    width={64}
                    alt={item.name}
                    className="mb-[10px]"
                  />
                </div>
                <h3 className="textLarge text-center">{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
