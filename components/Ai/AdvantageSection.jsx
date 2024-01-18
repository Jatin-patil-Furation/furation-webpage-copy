import React from "react";
import AdvantageMobile from "./AdvantageMobile";
import AdvantageDesktop from "./AdvantageDesktop";
import { images } from "@/public/assets";
import Image from "next/image";

const AdvantageSection = () => {
  return (
    <section className=" text-white">
      <div className="w-[90%] md:w-[85%] mx-auto mb-16">
        <h2 className="secondaryHeading mb-5">
          The <span className="text-primary">AI Advantage</span>: Does my
          business need it?
        </h2>
        <p className="smallText w-full md:w-[90%]">
          Using AI can make your processes better, find useful insights, and
          give you an edge over competitors. With AI, you can boost customer
          satisfaction and help your business grow. Now, the question is, how
          can my business make the most of it?
        </p>
      </div>

      <div className="md:w-[85%] mx-auto mb-20">
        <AdvantageMobile />
        <AdvantageDesktop />
      </div>

      <div className="min-h-[80vh] flex items-center p-3 bg-primary">
        <div className="w-[90%] md:w-[85%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="text-center md:text-left">
              <h2 className="secondaryHeading mb-3">
                Uncover the cost-effective potential of AI for your business
                growth.
              </h2>
              <p className="">
                The cost-effectiveness of AI implementation ensures that
                businesses, irrespective of their size, can harness its benefits
              </p>
            </div>
            <div className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
              <Image
                src={images.aiUnicorn}
                alt="unicorn"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
