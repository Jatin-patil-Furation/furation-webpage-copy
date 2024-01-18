import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactsPopup = () => {
  return (
    <div
      className="absolute top-10 right-20 w-[50%] "
      onMouseLeave={() => console.log("leave")}

      // onMouseLeave={setIsPopupOpen(() => false)}
    >
      <div className=" flex gap-2   px-3 py-2 shadow rounded  bg-white">
        <div className="basis-[23%] ">
          <Image
            className=" rounded-md"
            height={80}
            width={80}
            src="/assets/sale.jpg"
            alt=""
          />
        </div>
        <div className=" basis-[72%]   text-left font-Lato text-black">
          <div className="w-[90%] mx-auto">
            <p className="font-normal font-Lato mt-2 text-gray-600 text-xl">
              Write Us
            </p>
            <Link
              href={"mailto:hello@furation.tech"}
              target="_blank"
              className="font-bold text-[20px] text-[#153441]  hover:text-blue-600 hover:underline"
            >
              hello@furation.tech
            </Link>
            <p className="font-normal font-Lato mt-2 text-gray-600 text-xl">
              We are just to call wait
            </p>
            <Link href={"tel:+918169091599"}>
              <p className="font-bold mt-2 text-[#153441]">
                +91 8879906881 (Sales)
              </p>
            </Link>

            <Link href={"tel:+917208328994"}>
              <p className="font-bold mt-2 text-[#153441]">
                +91 7208328994 (Sales)
              </p>
            </Link>

            <Link href={"tel:+917700035397"}>
              <p className="font-bold mt-2 text-[#153441]">
                +91 7700035397 (Sales)
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPopup;
