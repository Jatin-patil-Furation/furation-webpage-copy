import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";

const FurationExperience = () => {
  const expContent = [
    {
      id: 1,
      icon: images.aiExp1,
      heading: "Experience That Matters",
      content:
        "With a team of experts, we bring real-world know-how to drive your AI initiatives, making them practical and impactful.",
    },
    {
      id: 2,
      icon: images.aiExp2,
      heading: "Scalability & Future-Proofing",
      content:
        "Our solutions are designed to grow with your business, providing scalability and adaptability for future needs.",
    },
    {
      id: 3,
      icon: images.aiExp3,
      heading: "Customized Solutions",
      content:
        "We tailor AI strategies to your unique needs, ensuring solutions that fit seamlessly into your business processes",
    },
  ];

  return (
    <section className="text-white">
      <div className="w-[90%] lg:w-[85%] mx-auto bg-aiPrimary">
        <div className="py-[25px] px-[45px] lg:py-[50px] lg:px-[70px] xl:py-[100px] xl:px-[120px]">
          <div className="">
            <h2 className="secondaryHeading text-center">
              Leveraging
              <span className="text-primary"> Furation's experience</span>{" "}
              Here's why you choose us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 lg:my-16">
            {expContent.map((item) => {
              return (
                <div className="lg:px-3" key={item.id}>
                  <Image
                    src={item.icon}
                    height={40}
                    width={40}
                    alt={item.heading}
                    className="mb-4"
                  />
                  <h3 className="heading3 mb-[6px]">{item.heading}</h3>
                  <p className="smallText">{item.content}</p>
                </div>
              );
            })}
          </div>

          <div className="w-full mb-14 lg:mb-[87px] h-[1px] bg-gradient-to-r from-aiPrimary via-white to-aiPrimary"></div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src={images.aiExp4}
                height={40}
                width={40}
                alt="Not just AI"
              />
            </div>
            <h3 className="heading3 mb-[6px]">Not just AI</h3>
            <p className="smallText w-[95%] mx-auto">
              Because we are a full-service development company, everything else
              your platform needs also gets taken care of in-house.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurationExperience;
