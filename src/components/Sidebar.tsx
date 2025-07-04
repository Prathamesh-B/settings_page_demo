import React, { useState } from "react";

import {
  CustomerIcon,
  DashboardIcon,
  MarketingIcon,
  ProductIcon,
  ProfileSwitchIcon,
  ReportingIcon,
  SearchIcon,
  SettingsIcon,
  SupportIcon,
  XMarkIcon,
} from "./Icons";
import ProfileIcon from "./ProfileIcon";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside {...props}>
      {/* Mobile menu button - only show on mobile, not tablet */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 rounded-lg border border-gray-200 bg-white p-2 shadow-lg sm:hidden"
      >
        <svg
          className="h-6 w-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 flex h-screen w-64 transform flex-col border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out sm:sticky sm:z-auto ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} `}
      >
        {/* App Icon */}
        <div className="ml-12 p-4 sm:ml-0">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-t from-gray-400 to-gray-100"></div>
        </div>

        {/* Search */}
        <div className="mb-6 px-4">
          <div className="relative">
            <SearchIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-gray-300 py-2 pr-12 pl-10 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span className="absolute top-1/2 right-3 hidden -translate-y-1/2 transform rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-400 sm:block">
              ⌘ K
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4">
          <div className="space-y-1">
            <NavItem icon={DashboardIcon} label="Dashboard" />
            <NavItem icon={ProductIcon} label="Product" />
            <NavItem icon={CustomerIcon} label="Customer" />
            <NavItem icon={MarketingIcon} label="Marketing" />
            <NavItem icon={ReportingIcon} label="Reporting" />
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="space-y-1 border-t border-gray-100 p-4">
          <NavItem icon={SettingsIcon} label="Settings" />
          <div className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <SupportIcon className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-bold">Support</span>
            </div>
            <div className="flex items-center space-x-2 rounded-md border-2 border-gray-300 px-2 py-1 font-bold shadow-xs">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
              <span className="text-xs whitespace-nowrap text-gray-500">
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Usage Alert */}
        <div className="relative mx-4 mb-1 rounded-lg bg-gray-50 p-3">
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            <XMarkIcon className="h-4 w-4" />
          </button>
          <div className="pr-6">
            <p className="mb-1 text-sm font-bold text-gray-900">Used space</p>
            <p className="mb-3 text-xs text-gray-600">
              Your team has used 80% of your available space. Need more?
            </p>
            <div className="mb-3 h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-green-700"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="flex space-x-2">
              <button className="text-xs font-bold text-gray-600 hover:text-gray-800">
                Dismiss
              </button>
              <button className="text-xs font-bold text-green-700 hover:text-green-800">
                Upgrade plan
              </button>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="m-4 rounded-xl border border-gray-200 p-4">
          <div className="flex items-start justify-between">
            <ProfileIcon />
            <div className="mx-3 min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-gray-900">
                Prathamesh B
              </p>
              <p className="truncate text-xs text-gray-500">pb@company.com</p>
            </div>
            <ProfileSwitchIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
          </div>
        </div>
      </div>
    </aside>
  );
};

type NavItemProps = {
  icon: React.ElementType;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex cursor-pointer items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50">
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="truncate text-sm font-bold">{label}</span>
    </div>
  );
};

export default Sidebar;
