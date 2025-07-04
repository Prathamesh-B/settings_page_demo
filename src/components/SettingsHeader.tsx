import { SearchIcon } from "./Icons";

const SettingsHeader = () => {
    const tabs = [
        { label: 'My details', active: true },
        { label: 'Company Profile', active: false },
        { label: 'Appearance', active: false },
        { label: 'Team', active: false },
        { label: 'Billing and Plan', active: false },
        { label: 'Notifications', active: false, badge: '2' },
        { label: 'Integrations', active: false },
    ];

    return (
        <div className="bg-white">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
                    <h1 className="text-xl ml-12 mt-3 sm:ml-0 sm:mt-0 sm:text-2xl font-bold text-gray-900 font-franie">Settings</h1>

                    {/* Search */}
                    <div className="relative w-full sm:w-auto sm:min-w-0 sm:max-w-xs lg:max-w-sm">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full sm:w-64 lg:w-80 pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded hidden sm:block">
                            ⌘ K
                        </span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="relative">
                    <div className="flex space-x-3 sm:space-x-6 lg:space-x-8 overflow-x-auto border-b border-gray-200 scrollbar-hide pb-0 snap-x snap-mandatory touch-pan-x">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`relative flex items-center space-x-2 pb-3 px-2 sm:px-0 whitespace-nowrap text-sm font-bold transition-colors duration-200 flex-shrink-0 snap-start min-w-fit ${tab.active
                                    ? 'text-green-700 border-b-2 border-green-700'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <span className="text-xs sm:text-sm">{tab.label}</span>
                                {tab.badge && (
                                    <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-xs font-medium border border-gray-200 bg-gray-100 rounded-full px-1.5 sm:px-2.5">
                                        {tab.badge}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                    
                    {/* Scroll indicator for mobile */}
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden"></div>
                </div>
            </div>
        </div>
    );
};

export default SettingsHeader;