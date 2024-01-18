import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import HeroCard from "./HeroCard";
import "./styles.css";
import Link from "next/link";

const AiHero = () => {
  const heroCards = [
    {
      id: 1,
      heading: "87%",
      content: "of C-level execs see AI as essential for growth",
      icon: images.aiHeroCard1,
    },
    {
      id: 2,
      heading: "$15.7T",
      content:
        "is the expected contribution of AI to the global economy by 2030",
      icon: images.aiHeroCard2,
    },
    {
      id: 3,
      heading: "100M",
      content:
        "users by Jan 2023, ChatGPT became the fastest-growing app in history",
      icon: images.aiHeroCard1,
    },
  ];

  return (
    <section className="text-white ">
      <div className="py-[50px] md:py-[80px] lg:py-[131px] w-full md:w-[85%] mx-auto">
        <div
          className="h-[619px] relative"
          style={{
            backgroundImage: `url(${images.aiHero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute w-[95%] md:w-[90%] lg:w-[80%] flex flex-col items-center justify-center left-1/2 right-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-semibold text-4xl lg:text-6xl text-center mb-4">
              <span>AI: From</span>
              <br />
              <span>Buzzword to Business</span>
            </h1>
            <p className="text-base lg:text-lg font-normal text-center mb-10">
              The AI revolution is happening now, and it's not just a dream or
              hype. Affordable tools and a growing talent pool are making it a
              real possibility for your business to grow. Stay updated on the
              latest trends and create strong AI setups with our help.
            </p>
            <Link href={`#contactSection`}>
              <button className="bg-primary font-medium text-base w-[131px] h-[40px] rounded-full">
                Get AI Ready
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-aiPrimary pb-[60px] grid grid-cols-1 md:grid-cols-3 gap-11 md:gap-5 lg:gap-14 px-[30px] justify-items-center">
          {heroCards.map((card) => {
            return <HeroCard data={card} key={card.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AiHero;
