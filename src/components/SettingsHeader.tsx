import { SearchIcon } from "./Icons";

const SettingsHeader = () => {
  const tabs = [
    { label: "My details", active: true },
    { label: "Company Profile", active: false },
    { label: "Appearance", active: false },
    { label: "Team", active: false },
    { label: "Billing and Plan", active: false },
    { label: "Notifications", active: false, badge: "2" },
    { label: "Integrations", active: false },
  ];

  return (
    <div className="bg-white">
      <div className="px-4 py-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <h1 className="font-franie mt-3 ml-12 text-xl font-bold text-gray-900 sm:mt-0 sm:ml-0 sm:text-2xl">
            Settings
          </h1>

          {/* Search */}
          <div className="relative w-full sm:w-auto sm:max-w-xs sm:min-w-0 lg:max-w-sm">
            <SearchIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-gray-300 py-2 pr-12 pl-10 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-64 lg:w-80"
            />
            <span className="absolute top-1/2 right-3 hidden -translate-y-1/2 transform rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-400 sm:block">
              ⌘ K
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative">
          <div className="scrollbar-hide flex touch-pan-x snap-x snap-mandatory space-x-3 overflow-x-auto border-b border-gray-200 pb-0 sm:space-x-6 lg:space-x-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`relative flex min-w-fit flex-shrink-0 snap-start items-center space-x-2 px-2 pb-3 text-sm font-bold whitespace-nowrap transition-colors duration-200 sm:px-0 ${
                  tab.active
                    ? "border-b-2 border-green-700 text-green-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-xs sm:text-sm">{tab.label}</span>
                {tab.badge && (
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1.5 text-xs font-bold sm:h-5 sm:w-5 sm:px-2.5">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent sm:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default SettingsHeader;
