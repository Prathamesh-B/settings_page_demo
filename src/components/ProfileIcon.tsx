import React from "react";

type ProfileIconProps = {
  imageUrl?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const ProfileIcon: React.FC<ProfileIconProps> = ({
  imageUrl,
  initials,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-16 w-16 text-lg",
  };

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full bg-gray-100 ${sizeClasses[size]} ${className}`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="font-bold text-gray-600">
          {initials?.slice(0, 2).toUpperCase() || "PB"}
        </span>
      )}
    </div>
  );
};

export default ProfileIcon;
