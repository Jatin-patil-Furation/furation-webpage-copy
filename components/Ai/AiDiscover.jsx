import React from "react";
import "./styles.css";

export const AiDiscover = () => {
  return (
    <section className="py-12 text-white bg-aiPrimary">
      <div className="flex flex-col items-center w-[90%] md:w-full mx-auto">
        <h2 className="secondaryHeading text-center mb-6">
          Discover Your AI Potential Today
        </h2>
        <button className="w-[131px] h-[40px] bg-primary rounded-full">
          Get AI Ready
        </button>
      </div>
    </section>
  );
};
