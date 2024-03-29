"use client";

import {
  ContactForm,
  ContactForm1,
  FooterNew,
  Navbar,
  TechnologyCard,
  KnowMoreCard,
} from "@/components";
import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import "./style.css";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
// import Swiper from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
import Slider from "react-slick";

import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Page = () => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Show arrows by default
    responsive: [
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 820, // Adjusted breakpoint for iPad Air
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false, // Disable auto-sliding
          arrows: false, // Hide arrows
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="overflowdiv fixed top-0 left-0 h-full w-full bg-black -z-[99999] "></div>

      <div className="ourTeamBody">
        <Navbar />
        <div className="ourteam w-full">
          <div className="w-[90%] m-auto">
            <div className="w-full mt-28">
              <h1 className="text-white font-[700] text-center heading-1">
                Meet our Team
              </h1>
              <p className="text-[#FFFFFF] primary-para text-center">
                Our people are our greatest strength
              </p>
            </div>
            <div className="w-[100%] lg:w-[60%] m-auto flex justify-center items-center text-center mt-10">
              <p className="text-[#FFFFFF]  primary-para text-center">
                We're like a cool gang of idea creators, design wizards, and
                tech-loving superheroes. We love to team up, have a blast during
                our happy hours, and throw parties to cheer our amazing team
                wins, which happen all the time! 🎉😄
              </p>
            </div>
            <div className="w-full m-auto flex justify-center items-center mt-16">
              <Image
                src={images.Rectangle59}
                alt="Meeting"
                className="w-50 h-50 rounded-[20px]"
              />
            </div>
          </div>
        </div>

        <div className="w-5/6 mx-auto mt-20">
          <div className="w-full">
            <h2 className="text-white font-[700] text-[45px] text-center heading-2">
              Fact Sheet
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 p-5 bg-black">
            <div className="border border-black p-4 text-center">
              <div className="flex justify-center items-center">
                <Image
                  src={images.hund}
                  alt="hund"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="p-3"></div>
              <p className="text-[#FFFFFFB2] para-2">
                Team Members or, say team players
              </p>
            </div>

            <div className="border border-black p-4 text-center">
              <div className="flex justify-center items-center">
                <Image
                  src={images.hunk}
                  alt="hunk"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="p-3"></div>
              <p className="text-[#FFFFFFB2] para-2">
                Lines of code pushed every week
              </p>
            </div>

            <div className="border border-black p-4 text-center">
              <div className="flex justify-center items-center">
                <Image
                  src={images.hundPlus}
                  alt="hundPlus"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="p-3"></div>
              <p className="text-[#FFFFFFB2] para-2">
                Cups of Coffee every week
              </p>
            </div>

            <div className="border border-black p-4 text-center">
              <div className="flex justify-center items-center">
                <Image
                  src={images.infinity}
                  alt="infinity"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className="p-3"></div>

              <p className="text-[#FFFFFFB2] para-2">
                Countless moments & jokes shared every day
              </p>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <div className="w-full flex justify-center items-center mt-20">
            <Image
              src={images.sunday}
              alt="week"
              className="w-[90%] hidden md:block  "
            />
            <Image
              src={images.sundaymobile}
              alt="week"
              className="w-[90%] h-auto md:hidden"
            />
          </div>
        </div>
        <div className=" p-6 mt-14 lg:mt-24 lg:p-20 z-0   ">
          <div className="carousel  ">
            <Slider {...settings}>
              <div className="pl-3  lg:pl-8">
                <Image
                  src={images.carosoul4}
                  // src="https://lollypop.design/wp-content/uploads/2023/06/branding.webp"
                  alt="Image 1"
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
              <div className="pl-3  lg:pl-8">
                <Image
                  src={images.carosoul5}
                  alt="Image 2"
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
              <div className="pl-3 lg:pl-8">
                <Image
                  src={images.carosoul3}
                  alt="Image 3"
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
              <div className="pl-3 lg:pl-8">
                <Image
                  src={images.carosoul4}
                  alt="Image 4"
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
              <div className="pl-3 lg:pl-8">
                <Image
                  src={images.carosoul2}
                  alt="Image 5"
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
              {/* <div className="pl-3 lg:pl-8">
              <Image
                src={images.work}
                alt="Image 6"
                className="w-full h-auto"
              />
            </div> */}
            </Slider>
          </div>
        </div>
        <div className="lg:w-[100%]  flex justify-center items-center h-[1px] lg:mt-32 mt-16">
          <div className="slide w-[800px] h-[1px] "></div>
        </div>
        <div
          className="w-full mt-24
       mb-24"
        >
          <div className="w-full">
            <div className="w-full flex justify-center items-center">
              <h2 className="text-white heading-2 text-center">
                Work Life <span className="text-[#FFFFFF99]">At It's Best</span>
              </h2>
            </div>
            <div className="w-[90%] m-auto mt-16">
              <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9">
                <div className="rounded-full border-[#FC3D45] border-2 p-6">
                  <p className="text-white text-center">
                    Learning & Development
                  </p>
                </div>
                <div className="rounded-full border-[#FC3D45] border-2 p-6">
                  <p className="text-white text-center">
                    Work with Latest Technology
                  </p>
                </div>
                <div className="rounded-full border-[#FC3D45] border-2 p-6">
                  <p className="text-white text-center">
                    Innovation & Quality First
                  </p>
                </div>
              </div>
              <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9">
                <div className="rounded-full border-[#FC3D45] border-2 p-6">
                  <p className="text-white text-center">
                    Constructive Feedback
                  </p>
                </div>
                <div className="rounded-full border-[#FC3D45] border-2 p-6">
                  <p className="text-white text-center">
                    Inclusive & Open Culture
                  </p>
                </div>
                <div className="rounded-full border-[#FC3D45] border-2 p-6">
                  <p className="text-white text-center">
                    Best & Global Opportunities
                  </p>
                </div>
              </div>
              <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-9">
                <div className="rounded-full border-[#FC3D45] border-2 p-6">
                  <p className="text-white text-center">
                    Mindful Personal Guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-16">
          <div className="w-[80%] m-auto">
            <h3 className=" heading-2 font-bold w-full md:w-[70%] lg:w-2/5 mb-3 leading-[3.688rem]">
              Say hello to the Leaders of our tribe!
            </h3>
            <p className="para-3 mb-10">
              Our pillars of guidance and support, who help us in every
              endeavour.
            </p>
          </div>
          <div className="mx-auto grid w-5/6 grid-cols-1 gap-8 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white">
            <div className="">
              <Image
                src="/assets/aadityaRajSingh.jpg"
                alt=".."
                class="rounded-t-lg w-full"
                width={300}
                height={400}
              />
              <div className="p-3"></div>
              <div className="flex justify-between items-center">
                <p className="team-card-name text-[22px] font-bold">
                  Adityaraj Singh
                </p>
                <p className="team-card-name text-[25px] font-bold">
                  <Link
                    target="_blank"
                    href={`https://www.linkedin.com/in/adityaraj-singh-3057b1150/`}
                  >
                    <FaLinkedin />
                  </Link>
                </p>
              </div>
              <p className="text-lg font-light  text-gray-950">
                CEO & Managing Director
              </p>
            </div>

            <div className="">
              <Image
                src="/assets/rounak.jpg"
                alt=".."
                class="rounded-t-lg w-full"
                width={300}
                height={400}
              />
              <div className="p-3"></div>
              <div className="flex justify-between items-center">
                <p className="team-card-name text-[22px] font-bold">
                  Rounak Tadvi
                </p>
                <p className="team-card-name text-[25px] font-bold">
                  <Link
                    target="_blank"
                    href={`https://www.linkedin.com/in/rounaktadvi/`}
                  >
                    <FaLinkedin />
                  </Link>
                </p>
              </div>
              <p className="text-lg font-light text-gray-950">CTO</p>
            </div>

            <div className="">
              <Image
                src="/assets/manish.jpg"
                alt=".."
                class="rounded-t-lg w-full"
                width={300}
                height={400}
              />
              <div className="p-3"></div>
              <div className="flex justify-between items-center">
                <p className="team-card-name text-[22px] font-bold">
                  Manish Chourasiya
                </p>
                <p className="team-card-name text-[25px] font-bold">
                  <Link
                    target="_blank"
                    href={`https://www.linkedin.com/in/manish-chourasiya-860b501a8/`}
                  >
                    <FaLinkedin />
                  </Link>
                </p>
              </div>
              <p className="text-lg font-light text-gray-950">CO-CTO</p>
            </div>

            <div className="">
              <Image
                src="/assets/karan.jpg"
                alt=".."
                class="rounded-t-lg w-full"
                width={300}
                height={400}
              />
              <div className="p-3"></div>
              <div className="flex justify-between items-center">
                <p className="team-card-name text-[22px] font-bold">
                  Karan Jangam
                </p>
                <p className="team-card-name text-[25px] font-bold">
                  <Link
                    target="_blank"
                    href={`https://www.linkedin.com/in/karan-jangam-9ba110206/`}
                  >
                    <FaLinkedin />
                  </Link>
                </p>
              </div>
              <p className="text-lg font-light text-gray-950">COO & CFO</p>
            </div>

            <div className="">
              <Image
                src="/assets/aadityaPatil.jpg"
                alt=".."
                class="rounded-t-lg w-full"
                width={300}
                height={400}
              />
              <div className="p-3"></div>
              <div className="flex justify-between items-center">
                <p className="team-card-name text-[22px] font-bold">
                  Aditya Patil
                </p>
                <p className="team-card-name text-[25px] font-bold">
                  <Link
                    target="_blank"
                    href={`https://www.linkedin.com/in/adityapatilblockchain/`}
                  >
                    <FaLinkedin />
                  </Link>
                </p>
              </div>
              <p className="text-lg font-light text-gray-950">CBO</p>
            </div>

            {/* <div className="">
            <Image
              src="/assets/profile-picture.jpeg"
              alt=".."
              class="rounded-t-lg"
              width={300}
              height={400}
            />
            <div className="p-3"></div>
            <p className="team-card-name text-2xl">Renil Komitla</p>
            <p className="text-lg font-light text-gray-950">President & CEO</p>
          </div> */}

            {/* <div className="">
            <div className=" inset-0 bg-black  p-6 flex flex-col justify-between rounded-t-lg h-[330px]  ">
              <div>
                <p className="team-card-name text-white text-2xl">Careers</p>
                <p className="text-lg font-light text-white mb-5">
                  This could be you!
                </p>
                <p className="font-light text-white">
                  Come work with us at Furation
                </p>
              </div>
              <div>
                <Link
                  target="_blank"
                  href={`https://wellfound.com/company/furation/jobs`}
                >
                  <button className="bg-red-500 w-full text-white font-bold py-2 px-4 rounded">
                    See Open Positions
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
            <div>
              <div class="relative rounded-t-[18px] bg-black">
                <Image
                  height={400}
                  width={300}
                  src={images.aadityaPatil}
                  alt=".."
                  class="rounded-t-[25px] bg-black"
                />
                <div class="absolute rounded-t-[18px] inset-0 bg-black bg-opacity-100 p-6 flex flex-col justify-between">
                  <div>
                    <p class="team-card-name text-white text-lg md:text-xl lg:text-2xl">
                      Careers
                    </p>
                    <p class="text-sm md:text-sm lg:text-lg font-light text-white mb-5">
                      This could be you!
                    </p>
                    <p class="text-sm md:text-sm lg:text-lg font-light text-white">
                      Come work with us at Furation
                    </p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://wellfound.com/company/furation/jobs"
                    >
                      <button class="bg-red-500 text-sm md:text-sm lg:text-lg w-full text-white font-bold py-1 px-2 md:py-1 md:px-2 lg:py-2 lg:px-2 rounded">
                        See Open Positions
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-10">
          <ContactUsSection />
        </div>
        <div className="bg-[#2D2D2D] flex justify-center">
          <FooterNew />
        </div>
      </div>
      <div className="knowMoreCard1">
        <KnowMoreCard />
      </div>
    </div>
  );
};

export default Page;
