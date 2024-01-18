import { FooterNew, Navbar } from "@/components";
import Link from "next/link";
import React from "react";

const page = () => {
  const list3 = [
    "Retain the material(s) downloaded with the copyright, trademarks and other proprietary information it includes.",
    "Not permitted to modify the material(s) in any way nor reproduce or display, perform, or distribute or otherwise use them for any public or commercial purpose",
    "Do not transfer the material(s) to any other person unless you give them notice of, and they agree to accept, the obligations arising under the terms and conditions of use. This Site, including all material(s), resource(s) is copyrighted and protected by worldwide copyright laws and treaty provisions. Except as expressly provided herein, Furation Tech does not grant any express or implied right to you under any patents, trademarks, copyrights or trade secret information.",
  ];

  return (
    <div className="text-white">
      <div className="mb-12">
        <Navbar />
      </div>
      <div className="w-[85%] mx-auto">
        <div className="mb-10">
          <h1 className="capitalize font-semibold text-[40px] mb-3">
            disclaimer
          </h1>
          <p className="text-lg font-extralight mb-3 leading-[22.68px]">
            This Website{" "}
            <Link className="font-bold underline" href={`/`}>
              {" "}
              furation.tech
            </Link>{" "}
            also expressed as 'Site', 'us', and 'we' in this Disclaimer is
            operated by Furation Tech. Access or use of this Website is subject
            to the following Disclaimer. Please go through the below Disclaimer
            and read it carefully before using the Website for any manner
            whatsoever.
          </p>
          <p className="text-lg font-extralight mb-3 leading-[22.68px]">
            By visiting this Site or by any of its subsidiary Sites or
            microsites thereof, you expressly declare yourself to agree to this
            Disclaimer. If there is any difficulty in understanding this
            Disclaimer, or if you do not agree with the contents thereof, we
            request you to discontinue using this Website.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">
            Purpose of the website
          </h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            Furation operates this Website as a guide to search for information
            about the products and services we offer. Through this Website, we
            intend to offer our visitors/customers a simple, quick and improved
            access to details about our products and services and try leveraging
            business opportunities for us.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">
            Nature of the information offered
          </h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            The development of this Site is with an intent to provide
            information to our visitors / customer about our service offerings,
            products, promotions, announcements or any other business related
            information. Information/data received via this Site should not be
            relied upon for making personal, medical, legal or financial
            decisions. The information, material or services included in or
            available through this Site may include inaccuracies or
            typographical errors. The improvement, modification or updating the
            information or data available on this Website, is a continuous and
            an on-going process.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">Website Update</h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            This Site could be periodically subjected to updates and revisions.
            Any material(s) on the Website should be considered current as of
            the date of initial publication as appearing thereon, irrespective
            of the date on which you may access the information. Furation
            maintains the right to delete or modify information on this Site
            without any prior notice to anyone, whatsoever.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">Risk Allocation</h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            The user accepts the entire risk with respect to the use or results
            of the Site use, which can include accuracy, reliability,
            performance, completeness, comprehensiveness, functionality, and
            continuity, or timelines of the information, data or any content
            available on the Website. To the maximum extent permitted by law, we
            remain non-liable under any circumstances for indirect damage, loss
            or consequential damage (such as, but not limited to: loss of time,
            emotional damage, loss of opportunity, loss of data, loss of profit,
            etc.).
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">External Hyperlink</h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            The Site may contain external links to other Websites or portals of
            which we have no substantive control whatsoever and in no manner
            does it indicate its endorsement by Furation Tech. External links on
            this Website may redirect viewer to Sites outside of Furation Tech
            control or any of its other subsidiaries or affiliates. We do not
            take guarantee of the accuracy or completeness of the information on
            the external links nor the availability of them. We do not take
            liability any loss or damage caused to anyone in whatsoever manner
            which can be due to access to the external Website(s). You
            specifically agree that Furation Tech is not responsible for any
            content sent using and/or included in this Site by any third party.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">
            Intellectual Property
          </h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            The content/information in any format which is depicted on this
            Website, are owned or licensed by Furation Tech and cannot be
            reproduced or distributed to the public without our express, written
            and prior consent. Furation Tech authorizes to view and download the
            information/Material(s) available on this Website ("Site") only for
            personal, non-commercial use. This authorization is not a transfer
            of title in the material(s) and copies of the material(s), and is
            subject to the following restrictions:
          </p>

          <ul className="list-none mb-7">
            {list3.map((item) => {
              return (
                <li
                  className="font-extralight text-xl flex items-baseline gap-5 mb-5 "
                  key={item}
                >
                  <div className="min-w-[14px] min-h-[14px] rounded-full bg-[#FC3D45] "></div>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">Trademarks</h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            The names of the external companies (other than Furation Tech or any
            of its subsidiaries) and products/services and their logos mentioned
            herein may be the trademarks of their respective owners.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">Amendments</h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            We reserve the right to change this Disclaimer at all/any times. It
            is the responsibility of the visitors/customers to regularly read
            through the applicable Disclaimer.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">
            Applicable law and Applicable court
          </h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            The use of this Website are governed by the laws of the Republic of
            India and any dispute regarding the validity, the interpretation or
            the implementation of this Disclaimer shall be definitively decided
            by the courts in Mumbai, India who shall have the exclusive
            jurisdiction.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="font-medium text-[28px] mb-7">Contact</h2>
          <p className="text-lg font-extralight mb-6 leading-[22.68px]">
            For any further information or if you would like to reach us, you
            can write to us at{" "}
            <span className="font-bold">hello@furation.tech</span>
          </p>
        </div>
      </div>

      <div className="bg-[#2D2D2D]">
        <FooterNew />
      </div>
    </div>
  );
};

export default page;
