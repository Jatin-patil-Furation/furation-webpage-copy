import { images } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SalesPopup = () => {
  return (
    <div
      className="absolute top-12 right-36 w-[397px] h-[215px] py-[27px] px-[30px] bg-[#262626] rounded-xl"
      onMouseLeave={() => console.log("leave")}

      // onMouseLeave={setIsPopupOpen(() => false)}
    >
      <div className="flex gap-6 justify-between">
        <div className="w-1/2 self-center">
          <Image src={images.callsalessvg} height={140} width={140} />
        </div>
        <div className="w-1/2">
          <div className="mb-4">
            <p className="font-light text-sm text-[#CECECE] mb-[6px] text-left">
              Write us
            </p>
            <Link
              href={"mailto:hello@furation.tech"}
              target="_blank"
              className="font-bold text-[20px] hover:text-primary hover:underline"
            >
              <p className="font-semibold text-sm leading-[17.64px] text-left">
                hello@furation.tech
              </p>
            </Link>
          </div>

          <div className="self-center">
            <p className="font-light text-sm text-[#CECECE] mb-[9px] text-left">
              We are just a call away
            </p>
            <Link href={"tel:+918879906881"}>
              <p className=" text-sm text-white mb-[8px] text-left">
                +91 8879906881{" "}
                <span className="font-light text-xs">(Sales)</span>
              </p>
            </Link>
            <Link href={"tel:+917208328994"}>
              <p className=" text-sm text-white mb-[8px] text-left">
                +91 7208328994{" "}
                <span className="font-light text-xs">(Sales)</span>
              </p>
            </Link>
            <Link href={"tel:+917700035397"}>
              <p className=" text-sm text-white mb-[8px] text-left">

                <span className="">+91 7700035397</span>{" "}

                <span className="font-light text-xs">(Sales)</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPopup;
