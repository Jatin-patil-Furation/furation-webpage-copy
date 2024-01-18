"use client";

import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button, Input1, SelectInput } from "..";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { contactUsSchema } from "@/formValidations/contactUsForm";

const ContactForm1 = () => {
  const checkList = [
    "End-to-End Product Engineering",
    "Digital Transformation",
    "POC / MVP / Feasibility Study",
    "UI / UX",
    "Development",
    "QA / Testing",
    "Maintenance / Support",
    "Startup Product Help",
  ];

  const jobRoleOptions = [
    "C-Level",
    "VP",
    "Director",
    "Manager",
    "Engineer",
    "Consultant",
    "Partner",
    "Specialist",
    "Product Leader",
    "Other",
  ];

  const inputs = [
    {
      id: "firstName",
      type: "text",
      label: "First Name",
      name: "First_Name",
      placeholder: "Enter your first name",
      required: true,
      // value: formData?.First_Name,
      Component: Input1,
      // onChange: handleInputChange,
    },
    {
      id: "lastName",
      type: "text",
      label: "Last Name",
      name: "Last_Name",
      placeholder: "Enter your last name",
      required: true,
      Component: Input1,
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      name: "Email_Address",
      placeholder: "Enter your Email Address",
      required: true,
      Component: Input1,
    },
    {
      id: "company_name",
      type: "text",
      label: "Company Name",
      name: "Company_Name",
      placeholder: "Enter your company name",
      required: false,
      Component: Input1,
    },
  ];

  const initialValues = {
    First_Name: "",
    Last_Name: "",
    Email_Address: "",
    Company_Name: "",
    Phone: "",
    Job_Role: "",
    Help_With: [],
    Message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactUsSchema,
    validateOnChange: true,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const capitalizedValues = {
        ...values,
        First_Name:
          values.First_Name.charAt(0).toUpperCase() +
          values.First_Name.slice(1),
        Last_Name:
          values.Last_Name.charAt(0).toUpperCase() + values.Last_Name.slice(1),
        Help_With: values.Help_With?.join(", "),
      };
      console.log("on submit called", capitalizedValues);
      let data = {
        data: capitalizedValues,
        subject: `${capitalizedValues["First_Name"]} ${capitalizedValues["Last_Name"]} - Website lead`,
        tos: [
          "hello@furation.tech",
          "rounak@furation.tech",
          "aditya@furation.tech",
          "karan@furation.tech",
          "aditya.patil@furation.tech",
          "manish@furation.tech",
          // "neel.narwadkar@furation.tech",
        ],
      };

      await fetch(
        "https://mobzx4h76v4fg4eitvda2eimxe0kedfn.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: capitalizedValues,
            // data: values,
          }),
        }
      ).then((res) => console.log(res));

      setSubmitting(true);

      await fetch(
        `https://kfe55blxzhs6bsjw32ichhryvm0qrvkm.lambda-url.ap-south-1.on.aws/`,
        {
          method: "POST",
          "Content-Type": "application/json",
          body: JSON.stringify(data),
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Submission Request Was Not Sent");
          }
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you! We'll get back to you.",
            showConfirmButton: false,
            timer: 2500,
          });
          setSubmitting(false);
          resetForm();
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: err,
            showConfirmButton: false,
            timer: 2500,
          });
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="gap-3 grid grid-cols-1 md:grid-cols-2 ">
          {inputs.map(({ Component, ...input }, index) => {
            return (
              <Component
                key={index}
                onChange={(e) => {
                  formik.handleChange(e);
                  // input.onChange(e);
                }}
                onBlur={formik.handleBlur}
                value={formik.values[input.name]}
                error={formik.errors[input.name]}
                touched={formik.touched[input.name]}
                {...input}
              />
            );
          })}
        </div>

        <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-gray-800 ">
              Phone *
            </label>
            <PhoneInput
              addInternationalOption={false}
              countrySelectProps={{
                required: true,
              }}
              defaultCountry="US"
              countryCallingCodeEditable
              numberInputProps={{
                className: `outline-none focus:border-black focus:outline-none`,
                required: true,
              }}
              className={`border-b ${
                formik.errors.Phone && formik.touched.Phone
                  ? "border-red-500"
                  : ""
              } text-sm py-[7px] `}
              placeholder="Enter phone number"
              value={formik.values["Phone"]}
              onChange={(e) => {
                formik.handleChange({
                  target: {
                    name: "Phone",
                    value: e || "",
                  },
                });
              }}
              onBlur={formik.handleBlur}
            />
            {formik.errors.Phone && formik.touched.Phone && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.Phone}
              </div>
            )}
          </div>

          <div>
            <SelectInput
              id="job_role"
              label="Job Role"
              name="Job_Role"
              required={false}
              options={jobRoleOptions}
              value={formik.values.Job_Role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        <div>
          <label className=" font-semibold text-sm mb-5">
            How we can help you
          </label>
          {checkList.map((item, index) => (
            <div key={index} className=" gap-5 ">
              <input
                checked={formik.values.Help_With.includes(item)}
                // onChange={() => handleCheckboxChange(item)}
                onChange={() => {
                  formik.setFieldValue(
                    "Help_With",
                    formik.values.Help_With.includes(item)
                      ? formik.values.Help_With.filter(
                          (helpItem) => helpItem !== item
                        )
                      : [...formik.values.Help_With, item]
                  );
                }}
                id={item}
                value={item}
                type="checkbox"
              />
              <label htmlFor={item} className="text-sm ml-4">
                {item}
              </label>
            </div>
          ))}
          {formik.errors.Help_With && formik.touched.Help_With && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.Help_With}
            </div>
          )}
        </div>

        <div className="mt-5">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-gray-800 mb-1 mt-5"
          >
            Additional detail *
          </label>
          <textarea
            value={formik.values.Message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="4"
            name="Message"
            id="message"
            className="text-sm w-full outline-none border-b focus:outline-none focus:border-black"
            placeholder="Message"
            required
          ></textarea>
          {formik.errors.Message && formik.touched.Message && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.Message}
            </div>
          )}
        </div>
        <div className="flex justify-center mt-2">
          <Button
            loading={formik.isSubmitting}
            disabled={formik.isSubmitting}
            text="Contact Us"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm1;
