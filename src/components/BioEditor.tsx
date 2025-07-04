import React, { useState } from "react";
import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListBulletIcon,
  NumberedListIcon,
} from "@heroicons/react/24/outline";

interface BioEditorProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
}

type FormatType = "bold" | "italic" | "link" | "bulletList" | "numberedList";
type FontType = "Regular" | "Heading 1" | "Heading 2";

const BioEditor: React.FC<BioEditorProps> = ({
  value,
  onChange,
  maxLength = 275,
  placeholder = "Tell us about yourself...",
}) => {
  const [activeFormats, setActiveFormats] = useState<FormatType[]>([]);
  const [selectedFont, setSelectedFont] = useState<FontType>("Regular");

  const toggleFormat = (format: FormatType): void => {
    setActiveFormats((prev) =>
      prev.includes(format)
        ? prev.filter((f) => f !== format)
        : [...prev, format],
    );
  };

  const handleFontChange = (font: FontType): void => {
    setSelectedFont(font);
  };

  const remainingChars = maxLength - value.length;

  return (
    <div className="grid grid-cols-1 items-start gap-3 border-b border-gray-200 pb-4 sm:grid-cols-4 sm:gap-4 sm:pb-5">
      <div className="mb-2 sm:mb-0">
        <label className="text-sm font-bold text-gray-700 sm:text-base">
          Bio <span className="text-lg text-green-500">*</span>
        </label>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Write a short introduction.
        </p>
      </div>
      <div className="col-span-1 sm:col-span-2">
        <div className="w-full">
          {/* Toolbar */}
          <div className="flex flex-col items-start gap-2 pb-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex w-full items-center space-x-1 rounded-lg border border-gray-300 px-2 py-2 sm:w-1/2 sm:px-2 sm:py-3">
              <select
                value={selectedFont}
                onChange={(e) => handleFontChange(e.target.value as FontType)}
                className="w-full border-none bg-transparent text-xs focus:outline-none sm:text-sm"
              >
                <option value="Regular">Regular</option>
                <option value="Heading 1">Heading 1</option>
                <option value="Heading 2">Heading 2</option>
              </select>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                type="button"
                onClick={() => toggleFormat("bold")}
                className={`rounded p-1.5 text-gray-400 hover:bg-gray-100 sm:p-2 ${activeFormats.includes("bold") ? "bg-gray-100" : ""}`}
              >
                <BoldIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onClick={() => toggleFormat("italic")}
                className={`rounded p-1.5 text-gray-400 hover:bg-gray-100 sm:p-2 ${activeFormats.includes("italic") ? "bg-gray-100" : ""}`}
              >
                <ItalicIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onClick={() => toggleFormat("link")}
                className={`rounded p-1.5 text-gray-400 hover:bg-gray-100 sm:p-2 ${activeFormats.includes("link") ? "bg-gray-100" : ""}`}
              >
                <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onClick={() => toggleFormat("bulletList")}
                className={`rounded p-1.5 text-gray-400 hover:bg-gray-100 sm:p-2 ${activeFormats.includes("bulletList") ? "bg-gray-100" : ""}`}
              >
                <ListBulletIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onClick={() => toggleFormat("numberedList")}
                className={`rounded p-1.5 text-gray-400 hover:bg-gray-100 sm:p-2 ${activeFormats.includes("numberedList") ? "bg-gray-100" : ""}`}
              >
                <NumberedListIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>

          {/* Text Area */}
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full resize-none rounded-lg border border-gray-300 p-3 px-2 py-2 text-sm focus:outline-none sm:py-3 sm:text-base"
            rows={4}
            placeholder={placeholder}
            maxLength={maxLength}
          />

          {/* Character Count */}
          <div className="mt-2 text-left">
            <span
              className={`text-xs sm:text-sm ${remainingChars < 0 ? "text-red-500" : "text-gray-500"}`}
            >
              {remainingChars} characters left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BioEditor };
