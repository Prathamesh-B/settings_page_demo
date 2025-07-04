import React, { useState } from "react";

interface TooltipOnHoverProps {
  tooltipText: string;
}

const TooltipOnHover: React.FC<TooltipOnHoverProps> = ({ tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative m-0 cursor-pointer p-0">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Question Mark Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_10459)">
            <path
              d="M6.06001 6.00004C6.21675 5.55449 6.52611 5.17878 6.93331 4.93946C7.34052 4.70015 7.81927 4.61267 8.28479 4.69252C8.75032 4.77236 9.17255 5.01439 9.47673 5.37573C9.7809 5.73706 9.94738 6.19439 9.94668 6.66671C9.94668 8.00004 7.94668 8.66671 7.94668 8.66671M8.00001 11.3334H8.00668M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00004C1.33334 4.31814 4.31811 1.33337 8.00001 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z"
              stroke="#717680"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_10459">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute left-1/2 z-10 -mt-20 w-64 -translate-x-1/2 transform rounded-lg bg-gray-800 p-3 text-sm text-white shadow-lg">
            {tooltipText}
            {/* Tooltip Pointer */}
            <div className="absolute bottom-[-8px] left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-8 border-r-8 border-l-8 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TooltipOnHover;
