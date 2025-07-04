import React, { useState } from "react";
import {
  EnvelopeIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { PhotoUpload } from "./PhotoUpload";
import { BioEditor } from "./BioEditor";
import TooltipOnHover from "./TooltipOnHover";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import SelectField from "./SelectField";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  role: string;
  country: string;
  phoneNumber: string;
  timezone: string;
  bio: string;
}

interface SettingsFormProps {
  onSave?: (data: FormData) => void;
  onCancel?: () => void;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ onSave, onCancel }) => {
  const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "Clara",
    lastName: "Smith",
    email: "clara@bizclues.com",
    oldPassword: "",
    newPassword: "",
    role: "Admin",
    country: "Australia",
    phoneNumber: "+1 (555) 000-0000",
    timezone: "Pacific Standard Time (PST) UTC-08:00",
    bio: "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.",
  });

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (): void => {
    if (onSave) {
      onSave(formData);
    }
  };

  const handleCancel = (): void => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="mb-6 flex flex-col space-y-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-gray-900 sm:text-xl">
            Personal info
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="flex flex-col items-stretch space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleCancel}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800"
          >
            Save
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 items-start gap-4 border-b border-gray-200 pb-5 lg:grid-cols-4">
          <label className="text-sm font-bold text-gray-700">
            Name <span className="text-lg text-green-500">*</span>
          </label>
          <div className="flex flex-col gap-4 sm:flex-row lg:col-span-2">
            <InputField
              type="text"
              placeholder="Clara"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <InputField
              type="text"
              placeholder="Smith"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="grid grid-cols-1 items-start gap-4 border-b border-gray-200 pb-5 lg:grid-cols-4">
          <label className="text-sm font-bold text-gray-700">
            Email address <span className="text-lg text-green-500">*</span>
          </label>
          <div className="flex flex-col gap-4 sm:flex-row lg:col-span-2">
            <div className="relative flex-1">
              <EnvelopeIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <InputField
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <button className="w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800 sm:w-auto">
              Verify
            </button>
          </div>
        </div>

        {/* Photo Upload */}
        <PhotoUpload />

        {/* Password Section */}
        <div className="grid grid-cols-1 items-start gap-4 border-b border-gray-200 pb-5 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="mb-2 text-sm font-bold text-gray-700">
              Change Password
            </h3>
            <p className="mb-4 text-sm text-gray-500">
              Your new password must be different to previously used passwords.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Old Password
              </label>
              <div className="relative">
                <PasswordField
                  value={formData.oldPassword}
                  onChange={(e) =>
                    handleInputChange("oldPassword", e.target.value)
                  }
                  showPassword={showOldPassword}
                  setShowPassword={setShowOldPassword}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                New Password
              </label>
              <div className="relative">
                <PasswordField
                  value={formData.newPassword}
                  onChange={(e) =>
                    handleInputChange("newPassword", e.target.value)
                  }
                  showPassword={showNewPassword}
                  setShowPassword={setShowNewPassword}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-500">
                    Must be at least 8 characters
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-500">
                    Must contain one special character
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800">
              Reset password
            </button>
          </div>
        </div>

        {/* Role */}
        <div className="grid grid-cols-1 items-start gap-4 border-b border-gray-200 pb-5 lg:grid-cols-4">
          <label className="text-sm font-bold text-gray-700">Role</label>
          <div className="space-y-2 lg:col-span-2">
            <InputField
              type="text"
              value={formData.role}
              onChange={() => {}}
              disabled
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-500"
            />
            <p className="text-sm text-gray-500">
              Please note the role can be changed through{" "}
              <span className="font-bold">
                Settings&gt;Team&gt;Edit Roles,{" "}
                <span className="underline underline-offset-2">click here</span>
              </span>{" "}
              to change the role.
            </p>
          </div>
        </div>

        {/* Country */}
        <div className="grid grid-cols-1 items-start gap-4 border-b border-gray-200 pb-5 lg:grid-cols-4">
          <label className="text-sm font-bold text-gray-700">
            Country <span className="text-lg text-green-500">*</span>
          </label>
          <div className="relative lg:col-span-2">
            <SelectField
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="Australia">🇮🇳 India</option>
              <option value="United States">🇺🇸 United States</option>
              <option value="Canada">🇨🇦 Canada</option>
            </SelectField>
            <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="grid grid-cols-1 items-start gap-4 border-b border-gray-200 pb-5 lg:grid-cols-4">
          <label className="text-sm font-bold text-gray-700">
            Mobile Number <span className="text-lg text-green-500">*</span>
          </label>
          <div className="flex flex-col gap-4 sm:flex-row lg:col-span-2">
            <div className="flex flex-1">
              <SelectField
                value={"US"}
                onChange={() => {}}
                className="rounded-l-lg border border-r-0 border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="US">US</option>
                <option value="AU">AU</option>
                <option value="CA">CA</option>
                <option value="GB">GB</option>
              </SelectField>
              <InputField
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="flex-1 rounded-r-lg border-t border-r border-b border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <button className="w-full rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800 sm:w-auto">
              Verify
            </button>
          </div>
        </div>

        {/* Timezone */}
        <div className="grid grid-cols-1 items-start gap-4 border-b border-gray-200 pb-5 lg:grid-cols-4">
          <div className="flex items-center gap-0.5">
            <label className="text-sm font-bold text-gray-700">Timezone</label>
            <TooltipOnHover tooltipText="Please enter your current timezone" />
          </div>
          <div className="relative lg:col-span-2">
            <ClockIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <SelectField
              value={formData.timezone}
              onChange={(e) => handleInputChange("timezone", e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-300 py-2 pr-10 pl-10 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="Pacific Standard Time (PST) UTC-08:00">
                Pacific Standard Time (PST) UTC-08:00
              </option>
              <option value="Eastern Standard Time (EST) UTC-05:00">
                Eastern Standard Time (EST) UTC-05:00
              </option>
              <option value="Central Standard Time (CST) UTC-06:00">
                Central Standard Time (CST) UTC-06:00
              </option>
              <option value="Mountain Standard Time (MST) UTC-07:00">
                Mountain Standard Time (MST) UTC-07:00
              </option>
            </SelectField>
            <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Bio */}
        <BioEditor
          value={formData.bio}
          onChange={(value) => handleInputChange("bio", value)}
        />

        {/* Bottom Buttons */}
        <div className="flex flex-col items-stretch space-y-2 sm:flex-row sm:items-center sm:justify-end sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleCancel}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
