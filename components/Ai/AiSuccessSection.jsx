import React from "react";
import "./styles.css";
import Image from "next/image";
import { images } from "@/public/assets";

const AiSuccessSection = () => {
  const cards = [
    {
      id: 1,
      icon: images.aiSuccess1,
      heading: "Assessing your needs",
      content:
        "We assess your needs, objectives, and data to identify AI opportunities that align with your goals.",
    },
    {
      id: 2,
      icon: images.aiSuccess2,
      heading: "Personalized Solution Design",
      content:
        "Our experts craft tailored AI solutions, to meet your unique requirements and maximize impact.",
    },
    {
      id: 3,
      icon: images.aiSuccess3,
      heading: "Seamless Integration & Testing",
      content:
        "Implement AI seamlessly into your operations, ensuring reliability and efficiency through rigorous testing.",
    },
    {
      id: 4,
      icon: images.aiSuccess4,
      heading: "Ongoing Performance Enhancement",
      content:
        "Continuously optimize AI systems, ensuring they evolve with your needs for lasting success.",
    },
  ];

  return (
    <section className="py-20 text-white">
      <div className="w-[90%] md:w-[85%] mx-auto mb-16">
        <h3 className="secondaryHeading text-center mb-2">
          Furation's Approach to
          <span className="text-primary">AI Success</span>
        </h3>
        <p className="smallText text-center">
          Adopting AI can optimize processes, extract valuable insights, and
          give you a competitive edge. You could enhance your customer’s
          satisfaction and growth with AI by your side. So the question should
          be how can my business leverage it?
        </p>
      </div>

      <div className="w-[90%] md:w-[85%] mx-auto flex flex-wrap gap-4 justify-evenly">
        {cards.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col gap-4 h-[380px] w-[266px] rounded-xl p-6 bg-aiPrimary"
            >
              <p>{"0" + item.id + "/0" + cards.length}</p>
              <Image
                src={item.icon}
                height={40}
                width={40}
                alt="Success image1"
              />
              <h3 className="heading3">{item.heading}</h3>
              <p className="textSmall">{item.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AiSuccessSection;
