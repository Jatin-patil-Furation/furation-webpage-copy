import { images } from "@/public/assets";
import Image from "next/image";
import React from "react";
import "./styles.css";

const CookieSettings = ({ closeModal, isOpen }) => {
  const closeSettingsModal = () => {
    closeModal();
  };

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-[999] ">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative h-[500px] overflow-y-scroll bg-black text-white cookieSettingsDiv p-8 w-[500px] mx-auto">
            <div className="flex justify-end">
              <button
                onClick={closeSettingsModal}
                className="font-bold text-lg text-white hover:text-primary"
              >
                X
              </button>
            </div>

            {/* Modal Content */}
            <div className="mx-3">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">
                  {/* Furation Tech Solutions */}
                  <Image
                    src={images.newLogo}
                    height={150}
                    width={150}
                    alt="logo"
                  />
                </h1>

                <h2 className="text-lg font-bold mb-4">
                  Privacy Preference Center
                </h2>

                <p className="mb-4 text-sm">
                  Company Logo Privacy Preference Center When you visit any
                  website, it may store or retrieve information on your browser,
                  mostly in the form of cookies. This information might be about
                  you, your preferences or your device and is mostly used to
                  make the site work as you expect it to. The information does
                  not usually directly identify you, but it can give you a more
                  personalized web experience. Because we respect your right to
                  privacy, you can choose not to allow some types of cookies.
                  Click on the different category headings to find out more and
                  change our default settings. However, blocking some types of
                  cookies may impact your experience of the site and the
                  services we are able to offer. For more information visit
                  Privacy Policy and Cookie Policy.
                </p>

                <button
                  className="bg-primary text-white p-2 rounded-lg"
                  onClick={() => {
                    closeSettingsModal();
                    localStorage.setItem(
                      "cookie",
                      JSON.stringify({ accepted: true })
                    );
                  }}
                >
                  Accept All
                </button>
              </div>

              <div className="mb-7">
                <h2 className="text-lg font-bold mb-4">
                  Manage Consent Preferences
                </h2>

                <h3 className="flex justify-between mb-4">
                  <span className="font-semibold">
                    Strictly Necessary Cookies
                  </span>
                  <span className="text-blue-600 font-semibold">
                    Always Active
                  </span>
                </h3>

                <p className="mb-4 text-sm">
                  These cookies are necessary for the website to function and
                  cannot be switched off in our systems. They are usually only
                  set in response to actions made by you which amount to a
                  request for services, such as setting your privacy
                  preferences, logging in or filling in forms. You can set your
                  browser to block or alert you about these cookies, but some
                  parts of the site will not then work. These cookies do not
                  store any personally identifiable information.
                </p>

                <div>
                  <h3 className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Targeting Cookies</span>
                    <span className="text-blue-600 font-semibold">
                      <label
                        for="toggle1"
                        className="flex items-center cursor-pointer select-none text-dark dark:text-white"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle1"
                            className="peer sr-only"
                          />
                          <div className="block h-8 rounded-full dark:bg-dark-2 bg-white w-14"></div>
                          <div className="absolute w-6 h-6 transition bg-gray-500 rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"></div>
                        </div>
                      </label>
                    </span>
                  </h3>

                  <p className="mb-4 text-sm">
                    These cookies may be set through our site by our advertising
                    partners. They may be used by those companies to build a
                    profile of your interests and show you relevant adverts on
                    other sites. They do not store directly personal
                    information, but are based on uniquely identifying your
                    browser and internet device. If you do not allow these
                    cookies, you will experience less targeted advertising
                  </p>
                </div>

                <div>
                  <h3 className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Performance cookies</span>
                    <span className="text-blue-600 font-semibold">
                      <label
                        for="toggle2"
                        className="flex items-center cursor-pointer select-none text-dark dark:text-white"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle2"
                            className="peer sr-only"
                          />
                          <div className="block h-8 rounded-full dark:bg-dark-2 bg-white w-14"></div>
                          <div className="absolute w-6 h-6 transition bg-gray-500 rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"></div>
                        </div>
                      </label>
                    </span>
                  </h3>

                  <p className="mb-4 text-sm">
                    These cookies allow us to count visits and traffic sources
                    so that we can measure and improve the performance of our
                    website. They help us to know which pages are the most and
                    least popular and to see how visitors move around the site.
                    All information these cookies collect is aggregated and
                    therefore anonymous. If you do not allow these cookies, we
                    will not know when you have visited our site.
                  </p>
                </div>

                <div>
                  <h3 className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Third Party Cookies</span>
                    <span className="text-blue-600 font-semibold">
                      <label
                        for="toggle3"
                        className="flex items-center cursor-pointer select-none text-dark dark:text-white"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="toggle3"
                            className="peer sr-only"
                          />
                          <div className="block h-8 rounded-full dark:bg-dark-2 bg-white w-14"></div>
                          <div className="absolute w-6 h-6 transition bg-gray-500 rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"></div>
                        </div>
                      </label>
                    </span>
                  </h3>
                  <p className="mb-4 text-sm">Third Party Cookies</p>
                </div>
              </div>

              <div className="flex gap-3 ">
                <button
                  className="bg-primary text-white p-2 rounded-lg"
                  onClick={closeSettingsModal}
                >
                  Reject All
                </button>
                <button
                  className="bg-primary text-white p-2 rounded-lg"
                  onClick={() => {
                    closeSettingsModal();
                    localStorage.setItem(
                      "cookie",
                      JSON.stringify({ accepted: true })
                    );
                  }}
                >
                  Confirm My Choices
                </button>
              </div>

              <div className="flex justify-end mt-7">
                <span className="text-sm">
                  Powered By{" "}
                  <Image
                    src={images.newLogo}
                    height={80}
                    width={80}
                    alt="logo"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CookieSettings;
