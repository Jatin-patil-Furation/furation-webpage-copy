"use client";

import React, { useState } from "react";
import { Input1 } from "..";
import { useFormik } from "formik";
import { caseStudySchema } from "@/formValidations/caseStudyForm";

const CaseStudyForm = () => {
  //   const [email, setEmail] = useState("");
  const initialValues = {
    email: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: caseStudySchema,
    validateOnChange: true,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form
        className="flex flex-col lg:flex-row lg:items-end gap-4 justify-center"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <label htmlFor="caseStudyEmail">
          Email: <br />
          <input
            id="caseStudyEmail"
            type="text"
            name="email"
            className="h-[38px] p-3 text-sm w-full lg:w-60 xl:w-72 rounded-md text-black outline-none focus:outline-none focus:border-2 focus:border-blue-700"
            // onChange={() => setEmail(e.target.value)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
        </label>
        <button className="bg-primary hover:bg-red-500 h-10 w-28 rounded-full">
          Download
        </button>
      </form>
      {formik.errors.email && formik.touched.email && (
        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
      )}
    </div>
  );
};

export default CaseStudyForm;
