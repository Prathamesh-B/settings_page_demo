import React from 'react';

import { CustomerIcon, DashboardIcon, MarketingIcon, ProductIcon, ReportingIcon, SearchIcon, SettingsIcon, SupportIcon, XMarkIcon,  } from './Icons';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0  ">
            {/* App Icon */}
            <div className="p-4">
                <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
            </div>

            {/* Search */}
            <div className="px-4 mb-6">
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                        ⌘K
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4">
                <div className="space-y-1">
                    <NavItem icon={DashboardIcon} label="Dashboard" />
                    <NavItem icon={ProductIcon} label="Product" />
                    <NavItem icon={CustomerIcon} label="Customer" />
                    <NavItem icon={MarketingIcon} label="Marketing" />
                    <NavItem icon={ReportingIcon} label="Reporting" />
                </div>
            </nav>

            {/* Bottom Section */}
            <div className="p-4 space-y-1">
                <NavItem icon={SettingsIcon} label="Settings" />
                <div className="flex items-center justify-between py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <SupportIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">Support</span>
                    </div>
                    <div className="flex font-bold items-center space-x-2 border-2 border-gray-300 rounded-md px-2 py-1 shadow-xs
">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">Online</span>
                    </div>
                </div>
            </div>

            {/* Usage Alert */}
            <div className="mx-4 mb-4 p-3 bg-gray-50 rounded-lg relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                    <XMarkIcon className="w-4 h-4" />
                </button>
                <div className="pr-6">
                    <p className="text-sm font-medium text-gray-900 mb-1">Used space</p>
                    <p className="text-xs text-gray-600 mb-3">
                        Your team has used 80% of your available space. Need more?
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-green-700 h-2 rounded-full" style={{ width: '80%' }}></div>
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
            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-900">Clara Smith</p>
                        <p className="text-xs text-gray-500">clara@bizclues.com</p>
                    </div>
                    {/* <ChevronUpIcon className="w-4 h-4 text-gray-400" /> */}
                </div>
            </div>
        </div>
    );
};

type NavItemProps = {
    icon: React.ElementType;
    label: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label }) => {
    return (
        <div className="flex items-center space-x-3 py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-bold">{label}</span>
        </div>
    );
};

export default Sidebar; 