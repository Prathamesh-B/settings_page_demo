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
            <div className="px-6 py-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 font-franie">Settings</h1>

                    {/* Search */}
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-80 pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                            ⌘K
                        </span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-8 overflow-x-auto border-b border-gray-200">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`relative flex items-center space-x-2 pb-3 whitespace-nowrap text-sm font-bold transition-colors duration-200 ${tab.active
                                    ? 'text-green-700 border-b-2 border-green-700'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <span>{tab.label}</span>
                            {tab.badge && (
                                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium border border-gray-200 bg-gray-100 rounded-full px-2.5">
                                    {tab.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SettingsHeader;