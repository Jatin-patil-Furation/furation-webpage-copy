import { FooterNew, Navbar } from "@/components";
import AdvantageSection from "@/components/Ai/AdvantageSection";
import { AiDiscover } from "@/components/Ai/AiDiscover";
import AiHero from "@/components/Ai/AiHero";
import AiSuccessSection from "@/components/Ai/AiSuccessSection";
import FaqSection from "@/components/Ai/FaqSection";
import FurationExperience from "@/components/Ai/FurationExperience";
import ImpactStorySection from "@/components/Ai/ImpactStorySection";
import TechStackSection from "@/components/Ai/TechStackSection";
import YourQuestionForm from "@/components/Ai/YourQuestionForm";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <AiHero />
      <AdvantageSection />
      <AiSuccessSection />
      {/* <AiDiscover /> */}
      {/* <ImpactStorySection /> */}
      <FurationExperience />
      <TechStackSection />
      {/* <YourQuestionForm /> */}
      <FaqSection />
      <section className="w-full flex justify-center py-10">
        <ContactUsSection />
      </section>
      <div className="bg-[#2D2D2D] flex justify-center">
        <FooterNew />
      </div>
    </div>
  );
};

export default page;
