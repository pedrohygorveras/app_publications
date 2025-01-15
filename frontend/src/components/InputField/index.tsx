import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { IconType } from "react-icons";
import { IoEye, IoEyeOff } from "react-icons/io5";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  Icon?: IconType;
  [key: string]: any;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  autoComplete = undefined,
  required = false,
  Icon,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-primary mb-1.5"
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">
        <Field
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          {...rest}
          className="input input-bordered w-full pr-12 focus:outline-none rounded-md"
          autoComplete={autoComplete || undefined}
        />
        {type === "password" ? (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 outline-none"
          >
            {showPassword ? (
              <IoEye className="w-7 h-7" />
            ) : (
              <IoEyeOff className="w-7 h-7" />
            )}
          </button>
        ) : (
          Icon && (
            <div className="absolute inset-y-0 right-3 flex items-center">
              <Icon className="w-8 h-8 text-gray-500" />
            </div>
          )
        )}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};
