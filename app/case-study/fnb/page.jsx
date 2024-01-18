import React from "react";
import "../styles.css";
import Image from "next/image";
import { images } from "@/public/assets";
import { FnBClientCard, FooterNew, Navbar } from "@/components";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import Link from "next/link";

const page = () => {
  const infoCards = [
    {
      id: 1,
      heading: "industry",
      description: "Food & Beverage",
    },
    {
      id: 2,
      heading: "platform",
      description: "Web, Backend, Mobile, Whatsapp Chatbot",
    },
    // {
    //   id: 3,
    //   heading: "project length",
    //   description: "2 Months",
    // },
  ];

  const projects = [
    {
      id: 1,
      heading: "UI/UX Design",
      description:
        "The food and beverage (F&B) industry is undergoing a digital transformation, and businesses are seeking innovative solutions to streamline operations, improve customer experience.",
      img1: images.fnbAkina,
      img2: images.fnb_img2,
    },
    {
      id: 2,
      heading: "Customised Point of Sales (POS)",
      description:
        "The food and beverage (F&B) industry is undergoing a digital transformation, and businesses are seeking innovative solutions to streamline operations, improve customer experience.",
      img1: images.fnb_pos1,
      img2: images.fnb_pos2,
    },
    {
      id: 3,
      heading: "Whatsapp chatbot",
      description:
        "The food and beverage (F&B) industry is undergoing a digital transformation, and businesses are seeking innovative solutions to streamline operations, improve customer experience.",
      img1: images.fnb_chatbot1,
      img2: images.fnb_chatbot2,
    },
    {
      id: 4,
      heading: "Reservation Management System",
      description:
        "The food and beverage (F&B) industry is undergoing a digital transformation, and businesses are seeking innovative solutions to streamline operations, improve customer experience.",
      img1: images.fnb_gms1,
      img2: images.fnb_gms2,
    },
  ];

  const clients = [
    {
      id: 1,
      img: images.gupta,
    },
    {
      id: 2,
      img: images.quattro,
    },
    {
      id: 3,
      img: images.estella,
    },
    {
      id: 4,
      img: images.pritam,
    },
    {
      id: 5,
      img: images.qinling,
    },
    {
      id: 6,
      img: images.sbeh,
    },
    {
      id: 7,
      img: images.trp,
    },
    {
      id: 8,
      img: images.spiceklub,
    },
    {
      id: 9,
      img: images.ginko,
    },
    {
      id: 10,
      img: images.pritamDhaba,
    },
    {
      id: 11,
      img: images.nom_nom,
    },
    {
      id: 12,
      img: images.radio_bar,
    },
  ];

  return (
    <div className="text-white">
      <Navbar />
      <section className="h-[100vh] heroSection relative">
        <div className="absolute w-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:-translate-y-1/3 lg:-translate-y-1/4 flex flex-col items-center">
          <h1 className="primaryHeading mb-3 md:mb-6">
            Empowering F&B Industry by Digitization: Enhancing Operations with
            Cutting-Edge Services
          </h1>
          <p className="para w-[90%] md:w-[70%] mb-7 md:mb-10">
            The food and beverage (F&B) industry is undergoing a digital
            transformation, and businesses are seeking innovative solutions to
            streamline operations, improve customer experience, and stay
            competitive in a dynamic market. Our comprehensive suite of services
            aims to empower F&B establishments by leveraging digitization to
            enhance their online presence, optimize order management, and
            elevate customer engagement.
          </p>
          <Link href={`#contactSection`}>
            <button
              type="button"
              className="focus:outline-none w-[219px] h-[47px] font-semibold text-white bg-[#EF3239] 
            hover:bg-red-800 focus:ring-4 focus:ring-red-300 
            rounded-full text-sm md:text-base lg:text-lg px-5 py-2
            dark:hover:bg-red-700 "
            >
              Get a free quote
            </button>
          </Link>
        </div>
      </section>

      <section className=" pt-[60px] md:pt-[100px] flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center w-[90%]">
          {infoCards.map((card) => {
            return (
              <div
                key={card.id}
                className="h-[147px] w-[384px] cardBg rounded-3xl p-6"
              >
                <p className="cardHeading pb-4">{card.heading}</p>
                <p className="cardDesc">{card.description}</p>
              </div>
            );
          })}
          <div className="w-full h-auto lg:h-[183px] cardBg rounded-3xl p-6">
            <p className="cardHeading pb-4">services</p>
            <p className="cardDesc">
              UI/UX Design, Customized Point of Sale (POS) System, Whatsapp
              chatbot, Digital Menu Creation, Reservation Management System,
              Review/Feedback Management System, Loyalty Management System
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-[80px] md:mt-[138px]">
        <div className="w-[90%]">
          {projects.map((proj) => {
            return (
              <div
                key={proj.id}
                className="flex flex-col items-center mb-[100px]"
              >
                <h2 className="secondaryHeading mb-10">{proj.heading}</h2>
                <p className="para w-[90%] md:w-[75%] mb-[60px]">
                  {proj.description}
                </p>
                <div className="flex w-full flex-wrap justify-evenly gap-[50px]">
                  <div className="h-[250px] w-full md:h-[344px] md:w-[540px]">
                    <Image
                      src={proj.img1}
                      height={100}
                      width={100}
                      alt="case study img"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="h-[250px] w-[350px] md:h-[344px] md:w-[540px] ">
                    <Image
                      src={proj.img2}
                      height={100}
                      width={100}
                      alt="case study img"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="h-auto fnb_clients pb-28 py-9">
        <div className="pt-[23px] flex flex-col items-center">
          <h2 className="secondaryHeading mb-6">Clients</h2>
          <p className="para mb-[60px] w-[90%] md:w-[75%]">
            We used the following technologies for designing and developing, the
            online music streaming App.
          </p>
        </div>
        <div className="flex justify-center">
          <div className=" grid grid-cols-1 md:grid-cols-2 justify-self-center self-center lg:grid-cols-3 gap-6">
            {clients.map((client) => {
              return <FnBClientCard key={client.id} img={client.img} />;
            })}
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center py-10">
        <ContactUsSection />
      </section>

      <footer className="bg-[#2D2D2D] flex justify-center">
        <FooterNew />
      </footer>
    </div>
  );
};

export default page;
