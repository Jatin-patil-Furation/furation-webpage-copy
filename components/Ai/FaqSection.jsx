import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import Faqs from "./Faqs";

const FaqSection = () => {
  return (
    <section className="text-white">
      <div className="my-20 w-[90%] lg:w-[85%] mx-auto">
        <h3 className="text-center text-xl  md:text-2xl lg:text-[32px] font-semibold mb-4">
          Frequently Asked Questions
        </h3>

        <div className="mb-8">
          <p className="text-center largeText">
            Have a question that is not answered?
          </p>
          <p className="text-center largeText">You can contact us at</p>
          <Link href={"mailto:hello@furation.tech"}>
            <p className="text-center text-primary">hello@furation.tech</p>
          </Link>
        </div>

        <div className="w-[95%] lg:w-[67.5%] mx-auto px-3 lg:px-8 py-6">
          <Faqs />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
