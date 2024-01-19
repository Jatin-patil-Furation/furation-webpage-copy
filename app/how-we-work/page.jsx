import { Footer, FooterNew, Navbar } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="overflow-clip">
      <Navbar />
      <header className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-7xl mx-auto text-[#FFFFFF] py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="flex flex-col justify-start gap-5 sm:gap-7 md:gap-9  lg:gap-12 mb-5 sm:mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-2xl leading-7 md:text-[42px] font-normal md:leading-10  ">
            How We Work?
          </h3>
          <div className="description w-full font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6 flex flex-col gap-4 ">
            <p className="basis-[100%]">
              In today's fast-paced world, staying ahead of the curve with
              technology is one of the biggest challenge for any company /
              business.
            </p>
            <p className="basis-[100%]">
              But it can be overwhelming to know where to even begin with
              Digitization / Automation / Cloud Adoption / Custom Software
              Development.
            </p>
          </div>

          <div className="desc-footer">
            <h4 className="heading font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6">
              We often see companies struggling with:
            </h4>
            <div className="py-4 flex flex-col gap-3">
              <div className="flex  justify-start gap-5 items-start md:items-center">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  Identifying the right areas for digitization.
                </p>
              </div>
              <div className="flex   justify-start gap-5 items-start md:items-center">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  Developing a clear roadmap for implementation.
                </p>
              </div>
              <div className="flex   justify-start gap-5 items-start md:items-center">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  Overcoming budget and resource constraints.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-2xl leading-7 md:text-[42px] font-normal md:leading-10 flex flex-col gap-7 sm:gap-8 md:gap-10 lg:gap-12 ">
          <h3 className="text-2xl leading-7 md:text-[42px] font-normal md:leading-10 ">
            This is where our unique approach come in.
          </h3>

          <div className="flex flex-col gap-5">
            <div className="font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6">
              We offer a free, 1-hour consultation to help you navigate your
              digitization journey.
            </div>

            <div className="flex flex-col gap-4 mb-3">
              <h4 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6">
                During this call, we will :
              </h4>
              <div className="flex flex-col gap-3">
                <div className="flex justify-start gap-5 items-start md:items-center">
                  <div
                    className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                    Discuss your specific business goals and challenges.
                  </p>
                </div>
                <div className="flex justify-start gap-5 items-start md:items-center">
                  <div
                    className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                    Analyze your current technology landscape and identify
                    potential opportunities.
                  </p>
                </div>
                <div className="flex justify-start gap-5 items-start md:items-center">
                  <div
                    className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                    Provide insights and recommendations tailored to your unique
                    needs.
                  </p>
                </div>
                <div className="flex justify-start gap-5 items-start md:items-center">
                  <div
                    className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                    Outline a potential roadmap for successful digitization.
                  </p>
                </div>
              </div>
            </div>

            <div className="font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6">
              This no-obligation consultation is a valuable opportunity for you
              to gain valuable insights and develop a clear direction for your
              digitization efforts.
            </div>
          </div>
        </div>
      </header>
      <section className="hero-section bg-[#191919] w-full py-6 sm:py-12 md:py-20 lg:py-32 ">
        <div className="container w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]  max-w-7xl text-white mx-auto flex flex-col justify-start gap-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl leading-8 lg:text-[42px] font-semibold  md:font-medium md:leading-10">
            Book 1-Hour FREE Consultation Call
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-7 md:gap-0  ">
            <div className="basis-[50%] flex flex-col justify-start gap-6 ">
              <div className="flex flex-col justify-start gap-4">
                <h4 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6">
                  What is the Next Step? What after this call?
                </h4>
                <p className="text-sm md:text-xl font-extralight leading-5 md:leading-7">
                  If you find us Valuable & Capable Partner for your
                  digitisation needs then we can offer you "Digital
                  Transformation Kickstart" package which will provide you with
                  a clear roadmap for your software development, this will be
                  tailor-made for your specific business needs.
                </p>
                <div className="flex justify-between w-[80%] mt-4 flex-wrap gap-2 lg:gap-0">
                  <div className="basis-[48%] lg:basis-[31%]  text-xs sm:text-sm  lg:text-base font-semibold leading-5 rounded-[30px] border-[0.5px] border-white text-center py-2">
                    Low Risk
                  </div>
                  <div className="basis-[48%] lg:basis-[31%] text-xs sm:text-sm lg:text-base font-semibold leading-5 rounded-[30px] border-[0.5px] border-white text-center py-2">
                    High Value
                  </div>
                  <div className="basis-[48%] lg:basis-[31%] text-xs sm:text-sm lg:text-base font-semibold leading-5 rounded-[30px] border-[0.5px] border-white text-center py-2">
                    Low Investment
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-sm md:text-base lg:text-xl font-extralight leading-6">
                *Approx. 5% of total project budget
              </p>
            </div>
            <div className="basis-[100%] md:basis-[40%]  relative order-first md:order-none flex flex-col gap-5">
              <div className="w-60 h-60 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-visible md:absolute left-0 md:top-[-3rem] lg:top-[-5rem] xl:top-[-6rem]">
                <Image
                  src={"/assets/consoulling-call.svg"}
                  width={500}
                  height={500}
                  className="w-full  "
                />
              </div>
              <a
                href="https://www.furation.tech/"
                target="_blank"
                className="bg-[#FF2424] w-[80%] mx-auto  text-white text-sm sm:text-base text-center md:text-lg lg:text-lg font-semibold px-2 py-3 md:px-2 md:py-1  rounded-[30px] md:absolute left-0 md:bottom-[3rem] md:left-[1rem] lg:bottom-[-3rem]"
              >
                Book 1-Hour FREE Consultation Call
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="Didyouknow-container w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-7xl mx-auto text-[#FFFFFF] flex flex-col justify-start gap-5 md:gap-12 pt-10 md:pt-20 pb-6">
        <h3 className="text-2xl leading-7 md:text-[42px] font-normal md:leading-10 ">
          Did you know?
        </h3>

        <div className="card-contianer flex flex-wrap justify-between items-stretch gap-6 ">
          <div className="basis-[48%] flex flex-col p-5 sm:p-8 md:p-10 justify-start bg-[#1A1A1A] rounded-[20px]  gap-6 flex-1 ">
            <h5 className="heading font-medium  text-base md:text-lg lg:text-xl leading-5 md:leading-6">
              Objective Failure
            </h5>
            <div className="objectives flex flex-col gap-5">
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  Up to 72% of software projects fail to fully achieve their
                  original objectives or intended purpose.
                </p>
              </div>

              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  A significant 57% of project failures are due to communication
                  breakdowns.
                </p>
              </div>
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  Around 37% of IT projects fail due to a lack of involvement
                  from senior management.
                </p>
              </div>
            </div>
            <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
              Key Takeaway: Clearly defining and aligning project goals with
              business objectives is crucial for success.
            </p>
          </div>
          <div className="basis-[48%] flex flex-col p-5 sm:p-8 md:p-10 justify-start bg-[#1A1A1A] rounded-[20px]  gap-6 flex-1">
            <h5 className="heading font-medium text-base md:text-lg lg:text-xl leading-5 md:leading-6">
              Timeline Failure
            </h5>
            <div className="objectives flex flex-col gap-5">
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  40-50% of projects miss their deadlines, leading to delays and
                  cost overruns.
                </p>
              </div>
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  21% of projects experience significant schedule overrun.
                </p>
              </div>
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  Approximately 32% of IT project failures result from
                  inadequate time management practices.
                </p>
              </div>
            </div>
            <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
              Key Takeaway: Implementing effective project management
              methodologies and realistic timelines is essential for on-time
              delivery.
            </p>
          </div>
          <div className="basis-[48%] flex flex-col p-5 sm:p-8 md:p-10 justify-start bg-[#1A1A1A] rounded-[20px]  gap-6 flex-1">
            <h5 className="heading font-medium text-base md:text-lg lg:text-xl leading-5 md:leading-6">
              Budget Failure
            </h5>
            <div className="objectives flex flex-col gap-5">
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  Nearly 49% of software projects face budget overruns.
                </p>
              </div>
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  33% of projects experience significant cost overruns.
                </p>
              </div>
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  41% of projects encounter substantial budget overruns,
                  contributing to financial challenges and project setbacks.
                </p>
              </div>
            </div>
            <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
              Key Takeaway: Accurate cost estimation, budget control, and
              managing scope creep are vital for staying within budget.
            </p>
          </div>
          <div className="basis-[48%] flex flex-col p-5 sm:p-8 md:p-10 justify-start bg-[#1A1A1A] rounded-[20px]  gap-6 flex-1">
            <h5 className="heading font-medium text-base md:text-lg lg:text-xl leading-5 md:leading-6">
              Change Request Overload
            </h5>
            <div className="objectives flex flex-col gap-5">
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  45% of projects suffer from excessive change requests (CRs),
                  causing rework and hindering progress.
                </p>
              </div>
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  37% of projects experience significant scope changes.
                </p>
              </div>
              <div className="flex justify-start gap-5 items-start">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  42% face project scope changes, causing delays and
                  complexities.
                </p>
              </div>
            </div>
            <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
              Key Takeaway: Smooth change requires clear requirements, strong
              change management, and managing stakeholder expectations.
            </p>
          </div>
          <div className="basis-full flex flex-col gap-6 bg-[#1A1A1A] rounded-[20px] justify-start md:justify-center md:items-center p-5 md:p-10 ">
            <h4 className="font-medium text-base md:text-lg lg:text-xl leading-5 md:leading-6">
              Combined Failure Rate
            </h4>
            <div className="flex flex-col gap-5 ">
              <div className="flex justify-start gap-5  items-start md:items-center">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2 "
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  A staggering 84% of projects experience at least one major
                  failure (objective, timeline, budget, or scope)
                </p>
              </div>
              <div className="flex justify-start gap-5 items-start md:items-center">
                <div
                  className="w-3 h-3 bg-[#FC3D45] rounded-full  mt-1 lg:mt-2"
                  style={{ aspectRatio: "1/1" }}
                />
                <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                  About 14% of IT projects fail completely.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="desc-container flex flex-col gap-6 justify-start">
          <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6">
            How our "Digital Transformation Kickstart" package helps mitigate
            above mentioned risks of Software Development by:
          </h3>
          <div className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl flex flex-col gap-5 ">
            <div className="flex  justify-start gap-5 items-start md:items-center">
              <div
                className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                style={{ aspectRatio: "1/1" }}
              />
              <p className="font-extralight leading-4 md:leading-5 lg:leading-6 text-sm sm:text-base md:text-lg  lg:text-xl">
                Focusing on clear goal definition and alignment
              </p>
            </div>
            <div className="flex  justify-start gap-5 items-start md:items-center">
              <div
                className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                style={{ aspectRatio: "1/1" }}
              />
              <p>
                Creating a roadmap for efficient project execution (which
                includes Mindmap, Wireframes, UI/UX & SRS), visualizing your
                project before development begins. With help of these artifacts
                you can -
              </p>
            </div>
            <div className="flex flex-col justify-start gap-1 pl-6">
              <div className="flex  justify-start gap-5  items-center">
                <div
                  className="w-3 h-3   border-[0.5px] border-[#FC3D45] bg-black rounded-full"
                  style={{ aspectRatio: "1/1" }}
                />
                <p>Secure buy-in from all stakeholders</p>
              </div>
              <div className="flex  justify-start gap-5 items-start md:items-center">
                <div
                  className="w-3 h-3   border-[0.5px] border-[#FC3D45] bg-black rounded-full"
                  style={{ aspectRatio: "1/1" }}
                />
                <p>Avoid costly development mistakes</p>
              </div>
              <div className="flex  justify-start gap-5 items-start md:items-center">
                <div
                  className="w-3 h-3   border-[0.5px] border-[#FC3D45] bg-black rounded-full"
                  style={{ aspectRatio: "1/1" }}
                />
                <p>Save time and resources in the long run</p>
              </div>
              <div className="flex  justify-start gap-5 items-start md:items-center">
                <div
                  className="w-3 h-3   border-[0.5px] border-[#FC3D45] bg-black rounded-full"
                  style={{ aspectRatio: "1/1" }}
                />
                <p>
                  And, Attract investors (if applicable) with a clear vision
                </p>
              </div>
            </div>
            <div className="flex  justify-start gap-5 items-start md:items-center">
              <div
                className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                style={{ aspectRatio: "1/1" }}
              />
              <p>Providing accurate time & cost estimates</p>
            </div>
            <div className="flex  justify-start gap-5 items-start md:items-center">
              <div
                className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                style={{ aspectRatio: "1/1" }}
              />
              <p>Ensuring transparency and preparedness</p>
            </div>
            <div className="flex  justify-start gap-5 items-start md:items-center">
              <div
                className="w-3 h-3 bg-[#FC3D45] rounded-full mt-1 lg:mt-2"
                style={{ aspectRatio: "1/1" }}
              />
              <p>Implementing effective change management processes</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-5 lg:gap-3 items-center">
          <div className="font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6 w-full">
            This bespoke “Digital Transformation Kickstart” package is a
            Low-Risk, High-Value solution tailored to your business needs.
          </div>
          <div className="font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-5 md:leading-6 w-full">
            This way, you get a valuable blueprint for your software without the
            upfront investment in full development. It's the perfect way to
            reduce risk, save time, and ensure your software development is a
            success.
          </div>

          <a
            href={"https://www.furation.tech/"}
            target="_blank"
            className="bg-[#FF2424] text-white text-sm sm:text-base md:text-lg font-semibold py-3 md:px-6 lg:px-8 md:py-2 rounded-[30px] my-8 "
          >
            Book 1-Hour FREE Consultation Call
          </a>
        </div>
      </section>
      <section className="bg-[#2D2D2D]">
        <FooterNew />
      </section>
    </main>
  );
};

export default page;
