import React from "react";

const PhoneInput = ({ label, id, required, ...props }) => {
  const options = ["+91", "+971", "+1"];
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-sm font-semibold text-gray-800 "
          htmlFor={id}
        >
          {label} {required ? <span>*</span> : null}
        </label>
        <select
          className="w-full text-sm p-2 border-b focus:outline-none focus:border-black"
          id={id}
          {...props}
          defaultValue={"+91"}
        >
          {/* <option value="+91">
            +91
          </option> */}
          {options?.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default PhoneInput;
