"use client";

import { images } from "@/public/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { ImBrightnessContrast } from "react-icons/im";
import { FiPower } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const KnowMoreModal = ({ open, close }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [inactivityTimeout, setInactivityTimeout] = useState(30);
  const [brightnessValue, setBrightnessValue] = useState(75);
  const [isScreenDark, setIsScreenDark] = useState(false);

  const handleBrightnessChange = (event) => {
    const value = event.target.value;
    setBrightnessValue(value);
    const filterValue = `brightness(${value}%)`;
    // document.body.style.filter = filterValue;
    const check = document.querySelector(".mainbody");
    const knowMoreCard = document.querySelector(".knowMoreCard");
    const ourteamBody = document.querySelector(".ourTeamBody");
    const check1 = document.querySelector(".modalDiv");
    const chatDiv = document.querySelector(".tidio-script-container");
    const startstartupLabBody = document.querySelector(".startupLabBody");
    if (check) {
      check.style.filter = filterValue;
      check1.style.filter = filterValue;
      knowMoreCard.style.filter = filterValue;
      // chatDiv.style.filter=filterValue
    }
    if (ourteamBody) {
      ourteamBody.style.filter = filterValue;
      check1.style.filter = filterValue;
      knowMoreCard.style.filter = filterValue;
    }
    if (startstartupLabBody) {
      startstartupLabBody.style.filter = filterValue;
      check1.style.filter = filterValue;
      knowMoreCard.style.filter = filterValue;
    }
  };

  const handleToggle = () => {
    console.log("inside handletoggle", isToggled);
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    console.log(inactivityTimeout, "inactivity timeout inside useefect");
    if (isToggled) {
      const timeout = setTimeout(() => {
        setIsScreenDark(true);
      }, inactivityTimeout * 1000);

      const resetTimer = () => {
        setIsScreenDark(false);
        setInactivityTimeout(30); // Reset the timer to 5 seconds
      };

      const interval = setInterval(() => {
        if (inactivityTimeout > 0) {
          console.log(inactivityTimeout, "inactivitytimeout");
          setInactivityTimeout(inactivityTimeout - 1);
        }
      }, 30000);

      // Listen for mouse movement to reset the timer
      window.addEventListener("mousemove", resetTimer);
      document.addEventListener("keydown", resetTimer);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
        window.removeEventListener("mousemove", resetTimer);
        document.removeEventListener("keydown", resetTimer);
      };
    } else {
      setIsScreenDark(false);
      setInactivityTimeout(30);
    }
  }, [isToggled, inactivityTimeout, brightnessValue]);

  useEffect(() => {
    const callDiv = document.querySelector(".overflowdiv");
    if (isScreenDark) {
      //     setIsScreenDark(true);
      callDiv.style.zIndex = "999999";
    } else {
      callDiv.style.zIndex = "-999999";
    }
  }, [isScreenDark]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const filterValue = `brightness(${brightnessValue}%)`;
      const check1 = document.querySelector(".modalDiv");
      check1.style.filter = filterValue;
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="modalDiv fixed  inset-0 h-[100vh] w-full text-white flex z-[9998]">
      <div className=" fixed inset-0 bg-black opacity-50"></div>
      <div
        style={{
          backgroundImage: `url(${images.ecoFriendly.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[100vh] w-full p-3 overflow-auto rounded-lg shadow-lg z-50"
      >
        <div className="flex justify-end mb-3">
          <button
            onClick={close}
            className="mt-6 text-3xl text-white px-4 py-2 rounded  focus:outline-none "
          >
            <RxCross1 />
          </button>
        </div>
        <div className="flex justify-center flex-wrap gap-2  md:mx-12">
          <div className="lg:w-[49%] w-full p-5  ">
            <h3 className="capitalize text-4xl md:text-5xl font-light mb-5">
              the eco friendly website
            </h3>
            <p className="font-light mb-4">
              Reduce your carbon footprint using any of these modes.
            </p>
            <ul className="flex flex-col gap-6">
              <li>
                <div className="flex gap-4 ">
                  <CiDark size={25} />

                  {/* <Image
                    src={images.behance}
                    height={30}
                    width={30}
                    alt="darkMode"
                  /> */}
                  <div className="md:w-2/3 w-full">
                    <p className="font-light text-sm md:text-base">Dark Mode</p>
                    <p className="font-light text-sm md:text-base">
                      One of the world's first website to run on Dark Mode by
                      default.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-4 ">
                  <ImBrightnessContrast size={25} />

                  {/* <Image
                    src={images.behance}
                    height={30}
                    width={30}
                    alt="darkMode"
                  /> */}
                  <div className="md:w-2/3 w-full">
                    <p className="font-light text-sm md:text-base">
                      Brightness Control
                    </p>
                    <p className="font-light text-sm md:text-base mt-2">
                      Adjust the brightness as suited.
                    </p>
                    <div className="flex w-full">
                      <CiDark size={25} />
                      {/* <Image
                        src={images.behance}
                        height={30}
                        width={30}
                        alt="darkMode"
                      /> */}{" "}
                      <input
                        className="w-full"
                        type="range"
                        id="brightnessControl"
                        min="50"
                        max="100"
                        value={brightnessValue}
                        onChange={handleBrightnessChange}
                      />
                      <ImBrightnessContrast size={25} />
                      {/* <Image
                        src={images.behance}
                        height={30}
                        width={30}
                        alt="darkMode"
                      /> */}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-4 ">
                  <FiPower size={25} />

                  {/* <Image
                    src={images.behance}
                    height={30}
                    width={30}
                    alt="darkMode"
                  /> */}
                  <div className="md:w-2/3 w-full">
                    <p className="font-light text-sm md:text-base flex justify-between">
                      Hibernate Mode
                      <label className="flex items-center relative w-max cursor-pointer select-none">
                        <input
                          checked={isToggled}
                          value={isToggled}
                          onChange={handleToggle}
                          type="checkbox"
                          className="toggle appearance-none transition-colors cursor-pointer w-16 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"
                        />
                        <span className="absolute font-medium text-xs uppercase right-1 text-white">
                          {" "}
                          OFF{" "}
                        </span>
                        <span className="absolute font-medium text-xs uppercase left-1 text-white">
                          {" "}
                          ON{" "}
                        </span>
                        <span
                          className={`w-8 h-7 ${
                            isToggled ? "right-7" : "left-0"
                          } absolute rounded-full transform transition-transform bg-gray-200`}
                        />
                      </label>
                    </p>
                    <p className="font-light text-sm md:text-base">
                      One of the world's first website to run on Dark Mode by
                      default.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-[49%] w-full  flex justify-center items-center">
            <div className="mx-auto my-auto ">
              {/* <video
                 className="top-0 left-0 h-full w-full object-cover"
                 autoPlay
                 loop
                 muted
               >
                 <source src="/assets/mov_bbb.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video> */}
              {/* <Image src={images.ecosystem} /> */}
              <p className="text-7xl md:text-8xl font-semibold saveTheWorld">
                Let's save <br /> the world together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMoreModal;
