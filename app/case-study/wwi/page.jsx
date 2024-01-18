import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import "../styles.css";
import { FnBClientCard, FooterNew, Navbar } from "@/components";
import WwiTechCard from "@/components/CaseStudies/WwiTechCard";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import Link from "next/link";

const page = () => {
  const infoCards = [
    {
      id: 1,
      heading: "industry",
      description: "Media & Entertainment  (M&E)",
    },
    {
      id: 2,
      heading: "platform",
      description: "Web",
    },
    {
      id: 3,
      heading: "project length",
      description: "3+ Months",
    },
  ];

  const devProcesses = [
    {
      id: 1,
      heading: "Business Analysis",
      desc: "We deliver a comprehensive package including a Software Requirement Specification (SRS) document, wireframes, and mindmaps. This aids in transforming their ideas into a roadmap, guiding them towards their anticipated business outcomes.",
    },
    {
      id: 2,
      heading: "UX/UI Design",
      desc: "This stage encompasses the creation and conceptualization of product design, we provide a product prototype to our client to provide clarity over the various flow within the product.",
    },
    {
      id: 3,
      heading: "Development & Quality Assurance",
      desc: "Our approach involves following the agile development process to construct a thoughtful and reliable app, coupled with stringent app testing practices to ensure the launch of a fully-functional application.",
    },
    {
      id: 4,
      heading: "Launch",
      desc: "We choose AWS as our cloud provider for deployment of various infrastructure elements such as databases, web-servers etc.",
    },
  ];

  const securityPractices1 = [
    {
      id: 1,
      logo: images.wwi_dataencryption, //data enc
      heading: "SSL/TLS Certificate with Encryption",
      desc: "We manage your SSL/TLS certificates by removing time-consuming manual process of purchasing, uploading and renewing SSL/TLS certificates.",
      layout: 3,
    },
    {
      id: 2,
      logo: images.wwi_oauth, //oauth
      heading: "Passwordless Authentication",
      desc: "Passwordless Authentication thwarts malicious attempts orchestrated by unauthorized users and guarantees that the system is exclusively accessed by authorized and authenticated users.",

      layout: 3,
    },
    {
      id: 3,
      logo: images.wwi_awsSecurity, //firewall
      heading: "Least Access Privilege",
      desc: "Implemented Least Access Privilege for resources within a private network to have limited access to databases.",
      layout: 3,
    },
    {
      id: 4,
      logo: images.wwi_sourcecode, //Source Code Obfuscation
      heading: "Logging and Monitoring",
      desc: "Implemented logging for various security events and monitoring logs for suspicious activities. Moreover, setting up alerts for unusual or unauthorized activities.",
      layout: 2,
    },
    {
      id: 5,
      logo: images.wwi_automatedBackup, //Automated Backup And Rollback
      heading: "Secure Coding Practices",
      desc: "Adhere to secure coding practices to mitigate common vulnerabilities such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
      layout: 2,
    },
  ];

  const techStack = [
    { id: 1, img: images.wwi_next },
    { id: 2, img: images.wwi_react },
    { id: 3, img: images.wwi_js },
    { id: 4, img: images.wwi_ts },
    { id: 5, img: images.wwi_tailwind },
    { id: 6, img: images.wwi_postman },
    { id: 7, img: images.wwi_firebase },
    { id: 8, img: images.wwi_figma },
    { id: 9, img: images.wwi_analytics },
    { id: 8, img: images.wwi_aws },
  ];

  return (
    <div className="text-white">
      <Navbar />
      <section className="h-[80vh] py-14  md:py-24">
        <div className="flex flex-col px-3 md:flex-row justify-center items-center gap-5">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={images.wwi_heropng}
              // height={100}
              // width={100}
              className="w-full h-full"
              alt="wwi hero"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="wwiPrimaryHeading mb-4">WWI Virtual Academy</h1>
            <p className="wwiPara mb-4 lg:w-[82%]">
            We crafted a web application for the WWI Virtual Academy's digital ed-tech store. Throughout the development process, our team faced various challenges and adeptly devised effective solutions, culminating in the successful realization of the finalized WWI Virtual Academy App!
            </p>
            <button className="h-auto w-full md:w-auto text-base md:text-lg font-semibold px-8 py-2 rounded-full bg-wwiPrimary">
            Build Similar App for your brand!
            </button>
          </div>
        </div>

        <div className="bg-wwiPrimary  flex items-center justify-center  mt-10 h-14 -rotate-[1.5deg] ">
          <div className=" flex justify-center items-center overflow-hidden">
            <div className="wwiMarqueeContainer">
              <div className="wwiMarqueeContent">
                <p className="wwiMarqueTxt ">Cinematography</p>
                <p className="wwiMarqueTxt ">Filmmaking</p>
                <p className="wwiMarqueTxt ">Direction</p>
                <p className="wwiMarqueTxt ">Editing</p>
                <p className="wwiMarqueTxt ">Screenwriting</p>

                <p className="wwiMarqueTxt ">Cinematography</p>
                <p className="wwiMarqueTxt ">Filmmaking</p>
                <p className="wwiMarqueTxt ">Direction</p>
                <p className="wwiMarqueTxt ">Editing</p>
                <p className="wwiMarqueTxt ">Screenwriting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-32 md:mt-32 lg:mt-72 flex justify-center">
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
          <div className="w-full flex flex-col items-center h-auto  cardBg rounded-3xl p-6">
            <p className="cardHeading pb-4">services</p>
            <p className="cardDesc md:w-[80%]">
              UX/UI Design,Web Development, Backend, Cloud, Quality Assurance,
              Payment Gateway Integration, Integration with CRM, Chatbot
              integration Interactive Video Streaming, Analytics, SEO (On-page,
              Off-page & Technical SEO)
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-16 lg:mt-36">
        <div className=" flex flex-col justify-center items-center mb-28">
          <div className="w-[90%] flex flex-col md:flex-row justify-center mb-[60px]">
            <div className=" md:w-1/2 self-center">
              <h2 className="font-semibold text-3xl md:text-4xl leading-[45.36px] text-white text-left">
                About the product
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="wwiPara">
              Being one of the world's best acting institutes and best film schools, WWI Virtual Academy was designed to focus on providing access to the best programs worldwide for passionate individuals. Our client wanted to increase awareness of the best programs offered by WWI VA by revamping their existing website and develop an web app to showcase the available programs which have seasonal enrolments based on vacancy. Let's discuss the the problem and solution that came across while building this versatile web application.
              </p>
            </div>
          </div>

          <div className=" flex justify-center w-full">
            <Image
              src={images.wwi_aboutpng}
              className="w-[90%] h-full"
              alt="about"
            />
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center mb-24">
          <div className=" flex w-[90%] flex-col md:flex-row justify-center mb-[60px] gap-10 lg:gap-28">
            <div className="md:w-1/2 self-center">
              <h2 className="font-semibold text-3xl md:text-4xl leading-[45.36px] text-white text-left mb-7">
                The Challenge
              </h2>
              <p className="wwiPara">
              During the design and development of the WWI VA web application, our dedicated development team encountered several challenges. These included content collection, ensuring website responsiveness across devices of various sizes, optimizing UI performance, enhancing video streaming quality, implementing robust data security measures, integrating payment gateways, collaborating with an existing CRM portal, ensuring seamless backend integration, securing payment transactions, managing the current web app, and transitioning from Wordpress to a NextJS app.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="h-[230px] w-[250px] lg:h-[340px] md:w-[360px]">
                <Image
                  src={images.wwi_challenge}
                  height={100}
                  width={100}
                  alt="challenge"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <div className=" flex w-[90%] flex-col md:flex-row justify-center mb-[60px] gap-10 lg:gap-28">
            <div className="flex justify-center items-center order-2 md:order-1">
              <div className="h-[230px] w-[250px] lg:h-[340px] md:w-[360px]  ">
                <Image
                  src={images.wwi_solution}
                  height={100}
                  width={100}
                  alt="challenge"
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="md:w-1/2 self-center order-1 md:order-2">
              <h2 className="font-semibold text-3xl md:text-4xl leading-[45.36px] text-white text-left mb-7">
                The Solution
              </h2>
              <p className="wwiPara">
              Our development team invested considerable time in research and collaboration with the WWI VA team and creative artists to design the web app with user-centric ideas. We devised an optimized streamlining strategy to enhance the user experience, guiding audiences seamlessly from the home page to the desired program, thereby boosting conversion rates. Additionally, we implemented a secure payment gateway integration in partnership with Cashfree Payments and integrated with an internal CRM portal for efficient lead management. This allows the VA team to track users on the web app and identify prospective leads, facilitating targeted communication with the right audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24 lg:mt-40">
        <div className="mb-12 mx-4">
          <h2 className="secondaryHeading mb-4">Our Role</h2>
          <p className="para">
          Here is how our web application development team prioritized the UI/UX and the development phase of the WWI VA app.
          </p>
        </div>
        <div className="flex justify-center">
          <div className=" flex flex-col justify-center w-[90%] md:w-[83%]">
            <div className="w-full border  border-[#333333] h-auto p-7">
              <div className="flex items-center gap-6 mb-4">
                <Image src={images.wwi_uiux} height={40} width={40} />
                <h3 className="wwiRoleHeading">UI/UX Design</h3>
              </div>
              <div className="md:ml-[66px]">
                <p className="wwiPara">
                Design is at the heart of any web application. Our web app development team dedicated significant time to research and implement a user-friendly app design. Additionally, we conducted usability testing to ensure smooth functionality and navigation within the app. Ultimately, we crafted an exciting app design format that proves highly affirmative and engaging for the intended audience.
                </p>
              </div>
            </div>

            <div className="w-full border  border-[#333333] h-auto p-7">
              <div className="flex items-center gap-6 mb-4">
                <Image src={images.wwi_dev} height={40} width={40} />
                <h3 className="wwiRoleHeading">Development + Quality Assurance & Launch</h3>
              </div>
              <div className="md:ml-[66px]">
                <p className="wwiPara">
                Post-design, our full-stack development team was actively engaged in developing the web application, focusing on streamlining responsive web development for compatibility across desktop, tablet, and mobile devices of various screen sizes. This included third-party integrations such as payment gateway integration and connecting with a CRM portal. Our goal was to deliver clean, efficient, and scalable code that allows easy editing for future app improvements and upgrades. Ultimately, we successfully developed a valuable product for the media and entertainment industry and launched it LIVE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24 lg:mt-40 flex items-center flex-col">
        <div className="w-[90%] mb-10">
          <h2 className="secondaryHeading mb-4">
            From Start to Finish: Our Development Processes
          </h2>
          <p className="para">
          At Furation, we adhere to a comprehensive software development process aimed at delivering excellence. Let's delve into the intricacies of our approach.
          </p>
        </div>
        <div className="w-[92%] grid grid-cols-4 mt-10 gap-[60px]">
          {devProcesses.map((item) => {
            return (
              <div
                key={item.id}
                className="col-span-4 md:col-span-2 lg:col-span-1"
              >
                <div className="relative h-[116px]">
                  <p className="absolute -z-[1] left-0 top-0 font-bold text-7xl text-[#2F2F2F]">
                    {item.id}
                  </p>
                  <h3 className="absolute top-12 wwiRoleHeading">
                    {item.heading}
                  </h3>
                </div>

                <div>
                  <p className="wwiPara">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-16 md:mt-24 lg:mt-40 flex items-center flex-col">
        <div className="w-[90%]">
          <h2 className="secondaryHeading mb-4">
            Industry-driven best practices
          </h2>
          <p className="para mb-12 md:mb-16 lg:mb-24">
            Diverse Security Measures in Place: Covering Network security and Data security
          </p>

          <div className="flex justify-evenly flex-wrap gap-6 mb-6 ">
            {securityPractices1.map((item) => {
              if (item.layout === 3) {
                return (
                  <div
                    key={item.id}
                    className="h-[280px] w-[384px] cardBg rounded-3xl py-8 px-6"
                  >
                    <Image
                      src={item.logo}
                      height={40}
                      width={40}
                      className="mb-5"
                    />
                    <p className="font-normal text-2xl pb-4">{item.heading}</p>
                    <p className="font-extralight text-sm md:text-sm lg:text-base xl:text-base">
                      {item.desc}
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex justify-evenly flex-wrap gap-6">
            {securityPractices1.map((item) => {
              if (item.layout === 2) {
                return (
                  <div
                    key={item.id}
                    className="h-[280px] w-full md:w-[588px]  cardBg rounded-3xl p-6"
                  >
                    <Image
                      src={item.logo}
                      height={40}
                      width={40}
                      className="mb-5"
                    />
                    <p className="font-normal text-2xl pb-4">{item.heading}</p>
                    <p className="font-extralight text-sm md:text-sm lg:text-base xl:text-base">
                      {item.desc}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24 lg:mt-40 flex items-center flex-col">
        <div className="w-[90%]">
          <h2 className="secondaryHeading mb-4">Tech -Stack Used</h2>
          <p className="para mb-8 md:mb-12 lg:mb-[70]">
            We used the following technologies for designing & development of WWI VA application.
          </p>
        </div>
        <div className="w-[65%] p-6  md:py-[30px] lg:py-[60px] flex justify-center flex-wrap gap-5 lg:gap-8 xl:gap-10 rounded-lg bg-[#1A1A1A]">
          {techStack.map((tech) => {
            return <WwiTechCard key={tech.id} img={tech.img} />;
          })}
        </div>
      </section>

      <section className="mt-16 md:mt-24 lg:mt-40 flex items-center flex-col ">
        <div className="flex items-center flex-col mb-14">
          <h2 className="secondaryHeading mb-4 md:mb-5 lg:mb-7">The Results</h2>
          <p className="para w-[80%] md:w-[60%] lg:w-[50%]">
          Finally, Furation achieved a milestone by designing and developing the groundbreaking web application, WWI Virtual Academy. WWI Virtual Academy serves as a comprehensive digital learning platform, providing access to top-notch programs in Cinematography, Filmmaking, Direction, Editing, and Screenwriting. Embraced by celebrities and everyday users alike, the web application is celebrated for its user-friendly interface and valuable contribution to the world of digital education.
          </p>
        </div>

        <Image
          // src={images.wwi_results}
          src={`/assets/wwi_results.png`}
          height={100}
          width={100}
          // className="h-[40vh] md:h-[60vh] lg:h-[80vh] w-[90vw] mb-10"
          className="w-[90%] h-full"
          alt="results"
        />
      </section>

      <section className="w-full flex justify-center py-10">
        <ContactUsSection />
      </section>

      <footer className="bg-[#2D2D2D] flex justify-center mt-28">
        <FooterNew />
      </footer>
    </div>
  );
};

export default page;
