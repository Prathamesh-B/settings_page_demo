import React, { useState, useRef } from "react";
import type { DragEvent, ChangeEvent } from "react";
import { CloudArrowUpIcon } from "./Icons";
import ProfileIcon from "./ProfileIcon";
import TooltipOnHover from "./TooltipOnHover";

interface PhotoUploadProps {
  onFileSelect?: (file: File) => void;
  maxSize?: number; // in bytes
  acceptedTypes?: string[];
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
  onFileSelect,
  maxSize = 5 * 1024 * 1024, // 5MB default
  acceptedTypes = ["image/svg+xml", "image/png", "image/jpeg", "image/gif"],
}) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file: File): void => {
    if (file.size > maxSize) {
      alert(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    if (!acceptedTypes.includes(file.type)) {
      alert(`File type must be one of: ${acceptedTypes.join(", ")}`);
      return;
    }

    setSelectedFile(file);
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleClick = (): void => {
    fileInputRef.current?.click();
  };

  return (
    <div className="grid grid-cols-1 items-start gap-3 border-b border-gray-200 pb-4 sm:grid-cols-4 sm:gap-4 sm:pb-5">
      <div className="mb-2 sm:mb-0">
        <div className="flex items-center gap-0.5">
          <label className="text-sm font-bold text-gray-700 sm:text-base">
            Your photo <span className="text-lg text-green-500">*</span>
          </label>
          <TooltipOnHover tooltipText="Add your Profile Photo" />
        </div>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          This will be displayed on your profile.
        </p>
      </div>
      <div className="col-span-1 flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row">
        <ProfileIcon size="lg" className="h-12 w-12 sm:h-16 sm:w-16" />
        <div
          className={`relative w-full cursor-pointer rounded-lg border-2 p-4 text-center transition-colors sm:p-6 ${
            dragActive
              ? "border-green-700 bg-green-50"
              : "border-green-600 hover:border-green-700"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedTypes.join(",")}
            onChange={handleInputChange}
            className="hidden"
          />

          <div className="mx-auto mb-2 w-fit rounded-lg border-1 border-gray-300 p-2 shadow">
            <CloudArrowUpIcon className="h-6 w-6 text-gray-200 sm:h-8 sm:w-8" />
          </div>

          <div className="mt-2 sm:mt-4">
            <button
              type="button"
              className="text-sm font-bold text-green-700 hover:text-green-700 sm:text-base"
            >
              Click to upload
            </button>
            <span className="text-xs text-gray-500 sm:text-sm">
              {" "}
              or drag and drop
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>

          {selectedFile && (
            <div className="mt-2 text-xs text-green-600 sm:text-sm">
              Selected: {selectedFile.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { PhotoUpload };
