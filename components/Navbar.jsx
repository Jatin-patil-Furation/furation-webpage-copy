"use client";
import { images } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from ".";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [startupIsVisible, setStartupIsVisible] = useState(false);

  const startupRef = useRef(null);

  const navLinks = [
    { name: "✨AI Lab", link: "/ai" },
    { name: "What we do", link: "/#ourCoreServicesSection" },
    { name: "Tech stack", link: "/#techStack" },
    { name: "Solutions", link: "/#solutions" },
    { name: "How we work", link: "/how-we-work" },
    { name: "Our team", link: "/our-team" },
    { name: "Startup", link: "#" },
  ];

  console.log(navLinks.length, "length"); 

  useEffect(() => {
    let navlinks = document.querySelectorAll(".navlinks");
    let hamburgerCheckbox = document.getElementById("hamburger");

    navlinks.forEach((navlink) => {
      navlink.addEventListener("click", () => {
        hamburgerCheckbox.checked = false;
      });
    });

    const handleClickOutside = (event) => {
      if (startupRef.current && !startupRef.current.contains(event.target)) {
        setStartupIsVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
  }, []);

  function scrollToContactSection() {
    const contactSection = document.getElementById("contactSection");
    let hamburgerCheckbox = document.getElementById("hamburger");

    hamburgerCheckbox.checked = false;

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  const handleStartupClick = () => {
    setStartupIsVisible(true);
  };

  const handleMouseEnter = () => {
    setStartupIsVisible(true);
  };

  const handleMouseLeave = () => {
    setStartupIsVisible(false);
  };

  return (
    <>
      <div className=" z-[100] w-full sticky bg-black top-0 flex justify-center">
        <div className="relative bg-black w-[90%]">
          <div className="lg:container lg:mx-auto lg:py-4 bg-black">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <Link href={`/`}>
                  <Image
                    width={150}
                    height={150}
                    src={images.newLogo}
                    alt="logo-tailus"
                  />
                </Link>
              </div>

              <div className="flex items-center justify-end ">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-0  md:-mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"
                  ></div>
                </label>

                <div className="h-full bg-black  peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] shadow-xl transition duration-300  lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row bg-black">
                    <ul className="ps-12  md:ps-12 lg:ps-0 pt-32 text-gray-700 space-y-8 bg-black lg:border lg:rounded-full lg:space-y-0 lg:flex lg:items-center lg:pt-3 lg:pb-3">
                      {/* {navLinks.map((navlink, index) => {
                        return (
                          <li
                            className={`md:flex  ${
                              index === navLinks.length - 1
                                ? "border-0"
                                : "lg:border-r"
                            } lg:justify-center lg:items-center `}
                            key={index}
                          >
                            <Link
                              href={navlink.link}
                              className="navlinks group px-2 lg:px-1.5 xl-2.5 relative text-center"
                            >
                              <span className="peer-checked:hamburger relative text-white hover:text-[#EF3239] lg:text-[10px] lg:px-1 xl:px-2 xl:text-[14px] text-[20px] uppercase font-semibold ">
                                {navlink.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })} */}

                      {navLinks.map((navlink, index) => {
                        return (
                          <li
                            className={`relative lg:flex  ${
                              index === navLinks.length - 1
                                ? "border-0"
                                : "lg:border-r"
                            } lg:justify-center lg:items-center `}
                            key={index}
                          >
                            <Link
                              href={navlink.link}
                              className={`${
                                navlink.name !== "Startup" ? "navlinks" : ""
                              }  group px-2 lg:px-1.5 xl-2.5 relative text-center`}
                              onClick={
                                navlink.name === "Startup"
                                  ? handleStartupClick
                                  : null
                              }
                              onMouseEnter={
                                navlink.name === "Startup"
                                  ? handleMouseEnter
                                  : null
                              }
                              // onMouseLeave={
                              //   navlink.name === "Startup"
                              //     ? handleMouseLeave
                              //     : null
                              // }
                            >
                              <span className="peer-checked:hamburger relative text-white hover:text-[#EF3239] lg:text-[10px] lg:px-1 xl:px-2 xl:text-[14px] text-[20px] uppercase font-semibold ">
                                {navlink.name}
                              </span>
                            </Link>

                            {navlink.name === "Startup" && startupIsVisible && (
                              <div
                                ref={startupRef}
                                onMouseLeave={handleMouseLeave}
                                className="popup rounded-lg  flex gap-5 flex-col  justify-center p-3 w-[250px] lg:w-[350px] absolute top-10 bg-[#262626] text-white"
                              >
                                <Link className="text-base" href={`/fts`}>
                                  <div className="flex gap-7">
                                    <div className="w-1/4 hidden h-[45px] lg:flex justify-center">
                                      <Image
                                        src={images.ftsStartLink}
                                        height={25}
                                        width={25}
                                        className="h-full w-full"
                                      />
                                    </div>
                                    <div>
                                      <p>FTS Start</p>
                                      <p className="text-xs text-[#CECECE]">
                                        A Head Start for Mobile App Projects
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  className="text-base"
                                  href={`/startup-lab`}
                                >
                                  <div className="flex gap-7">
                                    <div className="w-1/4 h-[45px] hidden lg:flex justify-center">
                                      <Image
                                        src={images.startupLabLink}
                                        height={25}
                                        width={20}
                                        className="h-full w-full"
                                      />
                                    </div>
                                    <div>
                                      <p>Startup Lab</p>
                                      <p className="text-xs text-[#CECECE]">
                                        A Tailor made approach for startups
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                {/* <Link className="text-base" href={`/ai`}>
                                  <div className="flex gap-7">
                                    <div className="w-1/4 h-[45px] hidden lg:flex justify-center">
                                      <Image
                                        src={images.aiLink}
                                        height={25}
                                        width={20}
                                        className="h-full w-full"
                                      />
                                    </div>
                                    <div>
                                      <p>AI</p>
                                      <p className="text-xs text-[#CECECE]">
                                        A Tailor made approach for startups
                                      </p>
                                    </div>
                                  </div>
                                </Link> */}
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex justify-center items-center py-8 ps-12 md:ps-0  md:py-16 lg:py-0 lg:pr-0">
                      {/* <Link
                        target="_blank"
                        href="https://wa.me/917208328994"
                        className="flex items-center ps-3  rounded-full text-center text-white"
                      > */}
                      <div className="flex items-center ps-3  rounded-full text-center text-white ">
                        <WhatsAppButton />
                      </div>
                      {/* </Link> */}

                      <div
                        className="flex items-center px-3 rounded-full text-center text-white"
                        onClick={() => scrollToContactSection()}
                      >
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-[#EF3239] 
                          hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                          font-medium rounded-full text-sm px-5 py-2
                          dark:hover:bg-red-700 dark:focus:ring-red-900 "
                        >
                          Get In Touch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
