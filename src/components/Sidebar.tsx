import React, { useState } from 'react';

import { CustomerIcon, DashboardIcon, MarketingIcon, ProductIcon, ProfileSwitchIcon, ReportingIcon, SearchIcon, SettingsIcon, SupportIcon, XMarkIcon, } from './Icons';
import ProfileIcon from './ProfileIcon';

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
                className="sm:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg border border-gray-200"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Overlay for mobile only */}
            {isOpen && (
                <div
                    className="sm:hidden fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed sm:sticky top-0 left-0 z-40 sm:z-auto
                w-64 h-screen bg-white border-r border-gray-200 flex flex-col
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
            `}>
                {/* App Icon */}
                <div className="p-4 ml-12 sm:ml-0">
                    <div className="w-10 h-10 bg-gradient-to-t from-gray-400 to-gray-100 rounded-lg"></div>
                </div>

                {/* Search */}
                <div className="px-4 mb-6">
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded hidden sm:block">
                            ⌘ K
                        </span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 overflow-y-auto">
                    <div className="space-y-1">
                        <NavItem icon={DashboardIcon} label="Dashboard" />
                        <NavItem icon={ProductIcon} label="Product" />
                        <NavItem icon={CustomerIcon} label="Customer" />
                        <NavItem icon={MarketingIcon} label="Marketing" />
                        <NavItem icon={ReportingIcon} label="Reporting" />
                    </div>
                </nav>

                {/* Bottom Section */}
                <div className="p-4 space-y-1 border-t border-gray-100">
                    <NavItem icon={SettingsIcon} label="Settings" />
                    <div className="flex items-center justify-between py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <SupportIcon className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm font-medium">Support</span>
                        </div>
                        <div className="flex font-bold items-center space-x-2 border-2 border-gray-300 rounded-md px-2 py-1 shadow-xs">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="text-xs text-gray-500 whitespace-nowrap">Online</span>
                        </div>
                    </div>
                </div>

                {/* Usage Alert */}
                <div className="mx-4 mb-1 p-3 bg-gray-50 rounded-lg relative">
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
                <div className="p-4 m-4 border rounded-xl border-gray-200">
                    <div className="flex items-start justify-between">
                        <ProfileIcon />
                        <div className="flex-1 min-w-0 mx-3">
                            <p className="text-sm font-medium text-gray-900 truncate">Prathamesh B</p>
                            <p className="text-xs text-gray-500 truncate">pb@company.com</p>
                        </div>
                        <ProfileSwitchIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
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
        <div className="flex items-center space-x-3 py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-bold truncate">{label}</span>
        </div>
    );
};

export default Sidebar;