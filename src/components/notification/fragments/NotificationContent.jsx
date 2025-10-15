function NotificationContent({ filteredData }) {
    return (
        <div className="py-4">
            <h3 className="text-sm font-semibold text-darkGray px-4 mb-3">Today</h3>
            <div className="space-y-1">
                {filteredData?.map((notification) => (
                    <div
                        key={notification.key}
                        className="flex items-start gap-3 px-4 py-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-base font-semibold text-black mb-1">
                                {notification.title}
                            </p>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-darkGray">{notification.subtitle}</span>
                                <span className="text-lightGray">•</span>
                                <span className="text-lightGray">{notification.date}</span>
                                <span className="text-lightGray">•</span>
                                <span className="text-lightGray">{notification.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotificationContent;