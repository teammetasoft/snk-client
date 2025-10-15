import { useState, useEffect } from 'react'
import PageHeader from "../common/header/PageHeader"
import NotificationContent from "./fragments/NotificationContent"
import NotificationData from "../../utils/mockData/NotificationData"

function Notification() {
    const [activeTab, setActiveTab] = useState('all')
    
    useEffect(() => {
        console.log("NotificationData", NotificationData)
    }, [])

    const tabs = [
        { key: "all", label: "All" },
        { key: "transaction", label: "Transaction" },
    ];

    const handleActiveTab = (key) => {
        setActiveTab(key)
    }
    
    const filteredData = activeTab === 'all' 
        ? NotificationData 
        : NotificationData.filter((notification) => notification.category === activeTab)

    return (
        <div className="">
            <PageHeader
                title="Notification"
                desc="View the overview of your stats"
                clrBtn="Clear"
            />
            <div className="px-5">
                <div className="flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide border-b border-gray-200">
                    {tabs.map(tab => (
                        <div
                            key={tab.key}
                            onClick={() => handleActiveTab(tab.key)}
                            className={`py-3 px-1 cursor-pointer border-b-2 transition-all whitespace-nowrap text-sm sm:text-base ${
                                activeTab === tab.key
                                    ? "border-primary text-primary font-semibold"
                                    : "border-transparent text-gray-600 hover:text-blue-400"
                            }`}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>
                <div className="">
                    <NotificationContent filteredData={filteredData}/>
                </div>
            </div>
        </div>
    )
}

export default Notification