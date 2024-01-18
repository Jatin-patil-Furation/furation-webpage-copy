// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { ContactsPopup } from ".";

// const WhatsAppButton = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         setIsPopupOpen(false);
//       }
//     };

//     document.body.addEventListener("click", handleClickOutside);

//     // Clean up the event listener on component unmount
//     return () => {
//       document.body.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div className="flex border  px-3 bg-[#cccccc]  rounded-full justify-between">
//         <button
//           //   onClick={handleWhatsAppClick}
//           className="border-0  w-full text-black"
//         >
//           <IoLogoWhatsapp size={15} />
//         </button>
//         <div className="w-[2px] h-full bg-black m-2 py-2"></div>
//         <button
//           //   onClick={handleTelephoneClick}
//           onMouseEnter={() => setIsPopupOpen(true)}
//           className="border-0  w-full text-black "
//         >
//           <BsFillTelephoneFill size={15} />
//         </button>
//       </div>
//       {isPopupOpen && (
//         <div ref={ref}>
//           <ContactsPopup />
//         </div>
//       )}
//     </>
//   );
// };

// export default WhatsAppButton;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ContactsPopup } from ".";
import Link from "next/link";
import SalesPopup from "./SalesPopup";

const WhatsAppButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex border  px-3 bg-[#cccccc]  rounded-full justify-between">
        <button
          //   onClick={handleWhatsAppClick}
          className="border-0  w-full text-black"
        >
          <Link target="_blank" href="https://wa.me/8879906881">
            <IoLogoWhatsapp size={15} />
          </Link>
        </button>
        <div className="w-[2px] h-full bg-black m-2 py-2"></div>
        <button
          //   onClick={handleTelephoneClick}
          onMouseEnter={() => setIsPopupOpen(true)}
          onClick={() => setIsPopupOpen(true)}
          // onMouseLeave={() => setIsPopupOpen(false)}
          className="border-0  w-full text-black "
        >
          <BsFillTelephoneFill size={15} />
        </button>
      </div>
      {isPopupOpen && (
        <div
          onMouseLeave={() => {
            setTimeout(() => {
              setIsPopupOpen(false);
            }, 400);
          }}
          ref={ref}
        >
          <SalesPopup />
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
