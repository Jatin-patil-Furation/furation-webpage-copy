import { FooterNew, KnowMoreCard, Navbar } from "@/components";
import React from "react";
import "./styles.css";
import Image from "next/image";
import { images } from "@/public/assets";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";

const page = () => {
  const scalableApps = [
    {
      id: 1,
      img: images.fts_accTimeline,
      heading: "Accelerated Timeline",
      desc: "Fast-forward the app development process to implement features and UI immediately.",
    },
    {
      id: 2,
      img: images.fts_scalableArchi,
      heading: "Scalable Architecture",
      desc: "Establishing a strong foundation for your application with a layered architecture based on best practices. This supports multiple application configurations and the codebase is designed to be safe and reliable, with null safety in mind.",
    },
    {
      id: 3,
      img: images.fts_fullyTested,
      heading: "Fully Tested Code",
      desc: "Tried and tested code from the beginning that has been validated an successfully deployed in multiple apps.",
    },
    {
      id: 4,
      img: images.fts_bakedIn,
      heading: "Baked-in Automation",
      desc: "Includes CI/CD scripts for workflow automation using Github Actions and Codemagic.",
    },
    {
      id: 5,
      img: images.fts_firebase,
      heading: `Firebase* Out-of-the-Box `,
      desc: "Pre-configured for Firebase and Google Cloud resources, including crash reporting, analytics, push notifications, in-app messaging, Firestore, and more. *Also configurable to other backend services.",
    },
    {
      id: 6,
      img: images.fts_accTimeline,
      heading: "Enterprise-Grade Features",
      desc: "Includes common features that scalable apps need, including authentication, logging, localization/internationalization, kill switch, force upgrade, and more.",
    },
  ];

  const ftsStartList = [
    "Unique, customised codebase",
    "All of the above features in the first commit",
    "Custom app icons and branding",
    "Ideal for teams looking to accelerate their development process",
  ];

  const ftsCoreList = [
    "Opinionated starter app template",
    "Extended Flutter counter app",
    "Basic feature set",
    "Great for a single developer",
  ];

  const tableContent = [
    {
      heading: "Foundation",
      content: [
        { name: "Latest stable Flutter version", start: true, core: true },
        { name: "Null Safety", start: true, core: true },
        { name: "Layered Architecture with Bloc", start: true, core: true },
        { name: "Localization", start: true, core: true },
        { name: "Build Flavors", start: true, core: true },
        { name: "Custom Splash Screen", start: true, core: false },
        { name: "Custom App Icons", start: true, core: false },
        {
          name: "Secure Storage (Keystore / Keychain)",
          start: true,
          core: false,
        },
      ],
      check1: false,
      check2: false,
    },
    // { name: "Latest stable Flutter version", check1: true, check2: true },
    // { name: "Null Safety", check1: true, check2: true },
    // { name: "Layered Architecture with Block", check1: true, check2: true },
    // { name: "Localization", check1: true, check2: true },
    // { name: "Build Flavors", check1: true, check2: true },
    // { name: "Custom Splash Screen", check1: true, check2: false },
    // { name: "Custom App Icons", check1: true, check2: false },
    {
      heading: "Automation & Maintenance",
      content: [
        { name: "GitHub Actions Workflows", start: true, core: true },
        { name: "Comprehensive Unit Tests", start: true, core: true },
        { name: "Comprehensive Widget Tests", start: true, core: true },
        { name: "CI/CD with Codemagic*", start: true, core: false },
        { name: "Force Upgrade", start: true, core: false },
        {
          name: "Down for Maintenance (Kill Switch)",
          start: true,
          core: false,
        },
        { name: "In-App Review Support", start: true, core: false },
      ],
    },
    {
      heading: "User Management",
      content: [
        { name: "Google Sign In Integration", start: true, core: false },
        { name: "Login with Apple Sign In", start: true, core: false },
        { name: "Login with Email & Password", start: true, core: false },
        {
          name: "Create Account with Email & Password",
          start: true,
          core: false,
        },
        { name: "Permissions Integration", start: true, core: false },
        {
          name: "Form Validation",
          start: true,
          core: false,
        },
      ],
    },
    {
      heading: "Analytics & Backend",
      content: [
        { name: "Firebase Analytics Integration", start: true, core: false },
        { name: "Firestore Integration", start: true, core: false },
        { name: "Crash Reporting (Crashlytics)", start: true, core: false },
        {
          name: "Logging",
          start: true,
          core: false,
        },
      ],
    },
  ];

  return (
    <>
      <div className="overflowdiv fixed top-0 left-0 h-full w-full bg-black -z-[99999] "></div>
      <div>
        <Navbar />
        <section className=" min-h-[80vh] text-white flex items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 mx-16 md:mx-28 h-full">
            <div className="h-full col-span-2 md:col-span-2 flex flex-col justify-center items-center">
              <div className="flex flex-col">
                <h1 className="mx-auto md:mx-0 text-center md:text-left ftsHeadings  md:w-[80%] lg:w-[100%] mb-2 md:mb-6">
                  <span className="lg:leading-[60px] leading-[40px]">
                    A Head Start for Mobile App Projects
                  </span>
                </h1>
                <p className="mx-auto md:mx-0 text-center md:text-left font-medium text-lg  lg:text-[28px] mb-2">
                  On Day 1 accelerate to Month 2
                </p>
                <p className="mx-auto md:mx-0 text-center md:text-left font-medium text-base lg:text-[20px] mb-6">
                  GTM (Go to market) timeline reduced by 20%
                </p>
                <p className="mx-auto text-center md:text-left md:mx-0 ftsPara  lg:w-[75%]">
                  Accelerate your Mobile app architecture, features, and
                  developer processes with our scalable, enterprise-grade best
                  practices.
                </p>
              </div>
            </div>
            <div className="h-full col-span-2 md:col-span-1 flex justify-center items-center">
              <Image src={images.fts_hero} />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="grid grid-cols-2">
            <div className="flex justify-center items-center gap-10 col-span-2 lg:col-span-1">
              <Image
                src={images.fts_start}
                height={100}
                width={100}
                className="h-[250px] w-[325px] lg:h-[378px] lg:w-[453px]"
              />
            </div>
            <div className="flex justify-center items-center col-span-2 lg:col-span-1">
              <div className="flex items-center flex-col mt-10">
                <h2 className="ftsHeadings mb-6 text-center md:text-left md:w-[75%]">
                  What is FTS Start?
                </h2>
                <p className="ftsPara w-[75%] text-left">
                  FTS Start is Furation's foundational app and code generator
                  that creates a unique customized codebase with all of the
                  functionality every app needs to launch and scale successfully
                  combined with our expert design, development & consulting
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 md:mt-24">
          <p className="mb-3 md:mb-4 lg:mb-6 text-center font-medium text-sm md:text-base lg:text-xl text-[#FF0017]">
            BENEFITS
          </p>
          <h2 className="ftsHeadings text-center mb-10 md:mb-14 lg:mb-20">
            Scalable Apps, Faster
          </h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 w-[78%]">
              {scalableApps.map((app) => {
                return (
                  <div
                    key={app.id}
                    className="flex flex-col justify-start items-center"
                  >
                    <div className="flex w-[148px] h-[115px] justify-center">
                      <Image
                        src={app.img}
                        height={40}
                        width={75}
                        alt="scalable app"
                        className="self-center mb-6"
                      />
                    </div>
                    <h3 className="ftsCardHeading mb-3 lg:self-start ">
                      {app.heading}
                    </h3>
                    <p className="ftsCardText text-center md:text-left opacity-70">
                      {app.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-14 md:mt-24">
          <h2 className="ftsHeadings text-center mb-10 md:mb-14 lg:mb-20">
            Two Frameworks to Start
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col  items-center md:py-10 md:px-16 lg:py-16 lg:px-32">
              <div className="h-[81px] w-[108px] mb-8">
                <Image src={images.fts_framework1} />
              </div>
              <h3 className="ftsCardHeading mb-7 md:mb-10">FTS Start</h3>
              <ul className="mx-10  md:w-[80%] lg:w-[70%] mb-14">
                {ftsStartList.map((item, index) => {
                  return (
                    <li className="ftsListText mb-5 flex gap-4" key={index}>
                      <p>✓</p> {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-[#191919] flex flex-col  items-center md:py-10 md:px-16 lg:py-16 lg:px-32">
              <div className="h-[81px] w-[108px] flex items-end mb-8">
                <Image src={images.fts_framework2} />
              </div>
              <h3 className="ftsCardHeading mb-7 md:mb-10">FTS Core</h3>

              <ul className=" mx-10 md:w-[80%] lg:w-[70%] mb-14">
                {ftsCoreList.map((item, index) => {
                  return (
                    <li className="ftsListText mb-5 flex gap-4" key={index}>
                      <p>✓</p> {item}
                    </li>
                  );
                })}
              </ul>

              <button className="border border-[#FF2424] text-[#FF2424] rounded-full h-[48px] w-[134px]">
                Try It Out
              </button>
              <div className="h-3"></div>
              <p className="text-[#FF242480] italic">Coming Soon</p>
            </div>
          </div>
        </section>

        <section className="mt-14 md:mt-24 text-white">
          <div className="relative overflow-x-auto flex justify-center">
            <table className="w-full md:w-[90%] lg:w-[75%] text-sm ">
              <thead className="text-xs  uppercase bg-[#FC3D45] ">
                <tr className="">
                  <th
                    scope="col"
                    className="px-6 py-3 lg:py-5 text-sm md:text-lg lg:text-xl font-semibold"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-3 lg:py-5 text-sm md:text-lg lg:text-xl font-semibold text-center"
                  >
                    FTS Start
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 lg:py-5 text-sm md:text-lg lg:text-xl font-semibold text-center"
                  >
                    FTS Core
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {tableContent.map((item, index) => {
                  return (
                    <tr className="" key={index}>
                      <td className="px-6 py-7 ftsCheckListTxt text-left">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item?.check1 ? (
                          <Image
                            src={images.fts_checkmark}
                            className="mx-auto"
                          />
                        ) : null}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item?.check2 ? (
                          <Image
                            src={images.fts_checkmark}
                            className="mx-auto"
                          />
                        ) : null}
                      </td>
                    </tr>
                  );
                })} */}

                {tableContent.map((item, index) => {
                  return (
                    // <div className="w-full" key={index}>
                    //   <tr className="">
                    //     <td className="px-6 py-7 ftsCheckListTxt text-left">
                    //       {item.heading}
                    //     </td>
                    //     <td></td>
                    //     <td></td>
                    //   </tr>
                    //   {item.content.map((elem) => {
                    //     return (
                    //       <tr key={elem}>
                    //         <td className="px-6 py-7 text-left">{elem.name}</td>
                    //         <td className="px-6 py-4 text-center">
                    //           {elem?.start ? (
                    //             <Image
                    //               src={images.fts_checkmark}
                    //               className="mx-auto"
                    //             />
                    //           ) : null}
                    //         </td>
                    //         <td className="px-6 py-4 text-center">
                    //           {elem?.core ? (
                    //             <Image
                    //               src={images.fts_checkmark}
                    //               className="mx-auto"
                    //             />
                    //           ) : null}
                    //         </td>
                    //       </tr>
                    //     );
                    //   })}
                    // </div>
                    <React.Fragment key={index}>
                      <tr>
                        <td
                          colSpan="3"
                          className=" py-7 ftsCheckListTxt text-left"
                        >
                          {item.heading}
                        </td>
                      </tr>
                      {item.content.map((item, innerIndex) => (
                        <tr key={innerIndex}>
                          <td className="py-5 text-sm lg:text-base text-left">
                            {item.name}
                          </td>
                          <td>
                            {item?.start ? (
                              <Image
                                height={30}
                                width={30}
                                src={images.fts_checkmark}
                                className="mx-auto"
                                alt="checkmark"
                              />
                            ) : null}
                          </td>
                          <td>
                            {item?.core ? (
                              <Image
                                height={30}
                                width={30}
                                src={images.fts_checkmark}
                                className="mx-auto"
                                alt="checkmark"
                              />
                            ) : null}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 mx-8 lg:mx-28 gap-6">
            <div className="col-span-3 flex justify-center items-center">
              <div>
                <h2 className="mb-11 font-semibold text-2xl md:text-3xl lg:text-[40px] xl:text-[40px] leading-10 text-white text-center md:text-left">
                  Built with ❤️ by Tech Solutions
                </h2>
                <p className="mb-8 ftsSolutionsText">
                  We built this FTS Start and the FTS CLI based on our extensive
                  experience building scalable production mobile app
                  applications for startups, SMEs and Enterprises by providing
                  them a head-start from the very beginning
                </p>
                <p className="mb-8 ftsSolutionsText">
                  As our team grew, it became crucial to ensure each new project
                  was developed with consistent, reliable best practices
                  designed with enterprise-grade scalability.
                </p>
                <p className="mb-8 ftsSolutionsText">
                  It’s also more fun to start building the parts of an app that
                  make it unique right away, compared to spending weeks setting
                  up the invisible parts that all apps need to scale.
                </p>
                <p className="mb-8 ftsSolutionsText">
                  We built FTS Start as a commitment to our best practices, and
                  we are bringing it to the world!
                </p>
              </div>
            </div>

            <div className="col-span-2 mt-5 flex justify-center">
              <div>
                <Image
                  src={images.fts_start}
                  height={100}
                  width={100}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full flex justify-center pt-14">
        <ContactUsSection />
      </section>

      <div className="bg-[#2D2D2D] mt-20">
        <FooterNew />
      </div>

      <div className="knowMoreCard1">
        <KnowMoreCard />
      </div>
    </>
  );
};

export default page;
