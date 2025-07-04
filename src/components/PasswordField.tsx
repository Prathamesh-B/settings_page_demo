import React from "react";
import InputField from "./InputField";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const PasswordField = ({
  value,
  onChange,
  showPassword,
  setShowPassword,
  placeholder = "",
  className = "",
  ...props
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative">
    <InputField
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className + " pr-10"}
      {...props}
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
      tabIndex={-1}
    >
      {showPassword ? (
        <EyeSlashIcon className="h-5 w-5" />
      ) : (
        <EyeIcon className="h-5 w-5" />
      )}
    </button>
  </div>
);

export default PasswordField;
