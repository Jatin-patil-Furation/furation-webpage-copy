import React from "react";

const Input1 = ({ id, label, required, touched, error, type, ...props }) => {
  return (
    <>
      <div className="w-full mb-4">
        <label
          className="block text-sm font-semibold text-gray-800"
          htmlFor={id}
        >
          {label} {required ? <span className="text-[20px]">*</span> : null}
        </label>
        <input
          className={`text-black block appearance-none text-sm placeholder:text-sm placeholder:capitalize w-full border-b p-2 focus:outline-none focus:border-black ${
            touched && error ? "border-red-500" : ""
          } ${type !== "email" ? "capitalize" : ""} `}
          id={id}
          required={required}
          {...props}
        />
        {touched && error ? (
          <div className="text-red-500 text-sm mt-1">{error}</div>
        ) : null}
      </div>
    </>
  );
};

export default Input1;
