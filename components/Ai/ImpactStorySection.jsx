import React from "react";
import "./styles.css";
import Image from "next/image";
import { images } from "@/public/assets";
import CaseStudyForm from "./CaseStudyForm";

const ImpactStorySection = () => {
  return (
    <section className="text-white py-20">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <h2 className="secondaryHeading text-center ">
          AI <span className="text-primary">Impact</span> Story
        </h2>
        {/* grid 1 */}
        <div className="w-[90%] lg:w-[85%] mx-auto my-14  ">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:px-8">
              <h3 className="font-semibold text-[32px]">Terramatic</h3>
              <h4 className="text-lg font-medium opacity-80 ">
                AI-BASED ROAD SAFTEY AUDITING PLATFORM
              </h4>
              <p className="largeText mb-4 lg:mb-0">
                "Terramatic" is an AI-powered platform that auto- audits road
                conditions and detects road furniture from mobile videos,
                compares it with Indian Road Congress (IRC) Safety Standards,
                and generates standard reports.The solution runs on
                sophisticated GIS algorithms crucial in producing accurate audit
                reports.
              </p>
            </div>
            <div>
              <Image
                src={images.aiImpact1}
                alt="AI impact story 1"
                className="h-full w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* grid 1 end */}

        <div className="w-[95%] mx-auto h-[1px] bg-gradient-to-r from-black via-white to-black"></div>

        {/* grid 2 start */}
        <div className="w-[90%] lg:w-[85%] mx-auto my-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 lg:gap-0">
            <div className="lg:px-8">
              <h3 className="font-semibold text-[32px]">
                Download Case Study!
              </h3>
              <p className="largeText mb-4 lg:mb-6">
                From Routine to Remarkable: Gain a deeper understanding of how
                AI revolutionized the once labor-intensive process of Road
                Safety Auditing.
              </p>

              <CaseStudyForm />
            </div>
            <div>
              <Image
                src={images.aiImpact2}
                alt="AI impact story 1"
                className="h-full w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* grid 2 end */}
      </div>
    </section>
  );
};

export default ImpactStorySection;
