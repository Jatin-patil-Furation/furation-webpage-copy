import React from "react";

const SelectInput = ({
  id,
  label,
  required,
  options,
  value = "Select A Role",
  ...props
}) => {
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
          className="w-full text-sm placeholder:text-sm p-2 border-b focus:outline-none focus:border-black"
          id={id}
          // defaultValue={value}

          value={value}
          {...props}
        >
          <option value="" disabled>
            Select a Role
          </option>
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

export default SelectInput;
