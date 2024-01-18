"use client";

import React from "react";
import { Input1 } from "..";
import { useFormik } from "formik";
import { aiQuestionsForm } from "@/formValidations/aiQuestionsForm";

const YourQuestionForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: aiQuestionsForm,
    validateOnChange: true,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting();
      console.log("Question form => ", values);
    },
  });

  return (
    <section>
      <div className="bg-aiPrimary text-white">
        {/* <div className="w-[85%] mx-auto py-[68px] grid grid-cols-1 lg:grid-cols-2"> */}
        <div className="w-[85%] mx-auto py-[68px] flex flex-wrap gap-8 lg:gap-0">
          <div className="w-full lg:w-1/3">
            <h2 className="text-[32px] font-semibold text-center">
              Discover AI Together Your Questions, Our Expertise
            </h2>
          </div>

          <div className="w-full lg:w-2/3 py-4 px-6 bg-white rounded-[14px]">
            <form className="" onSubmit={formik.handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 lg:gap-20">
                <div>
                  <Input1
                    id="yourQuesName"
                    placeholder="Enter Name"
                    name="name"
                    label="Name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                  />
                </div>
                <div>
                  <Input1
                    id="yourQuesEmail"
                    placeholder="Enter Email"
                    name="email"
                    label="Email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                  />
                </div>
              </div>
              <div className="mt-4 mb-6 lg:mt-8 lg:mb-12">
                <label
                  htmlFor="yourQuesMsg"
                  className="block text-sm font-semibold text-gray-800 mb-4"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="yourQuesMsg"
                  rows={1}
                  className="text-black w-full border border-[#CCCCCC] rounded-[3px] p-3 outline-none focus:outline-none focus:border-black"
                  placeholder="Your Message..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  error={formik.errors.message}
                  touched={formik.touched.message}
                ></textarea>
              </div>

              <div className="mb-4 lg:mb-9 flex justify-center ">
                <button
                  type="submit"
                  className="h-[40px] w-[88px] bg-primary hover:bg-red-400 text-white rounded-full font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourQuestionForm;
