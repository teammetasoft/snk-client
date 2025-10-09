import React, { useState } from "react";
import { Select, Input, Button, Space } from "antd";
import { DownOutlined, ReloadOutlined, SettingOutlined, SearchOutlined, FilterOutlined } from "@ant-design/icons";
const { Search } = Input;

// Tab Navigation Component with Filters
const SchemeTabNavigation = ({ activeTab, onChange }) => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedInvestors, setSelectedInvestors] = useState(null);
    const [selectedOverdue, setSelectedOverdue] = useState(null);
    const [showFilters, setShowFilters] = useState(false);

    const tabs = [
        { key: "active", label: "Active" },
        { key: "closed", label: "Closed" },
        { key: "drafts", label: "Drafts" }
    ];

    const investorOptions = [
        { value: "all", label: "All Investors" },
        { value: "active", label: "Active Investors" },
        { value: "inactive", label: "Inactive Investors" }
    ];

    const overdueOptions = [
        { value: "all", label: "All" },
        { value: "overdue", label: "Overdue" },
        { value: "not_overdue", label: "Not Overdue" }
    ];

    const handleReset = () => {
        setSearchValue("");
        setSelectedInvestors(null);
        setSelectedOverdue(null);
    };

    return (
        <div className="mb-6 border-b border-gray-200">
            {/* Main row with tabs and filters */}
            <div className="flex items-center justify-between px-2 sm:px-0">
                {/* Tabs */}
                <div className="flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">
                    {tabs.map(tab => (
                        <div
                            key={tab.key}
                            onClick={() => onChange(tab.key)}
                            className={`py-3 px-1 cursor-pointer border-b-2 transition-all whitespace-nowrap text-sm sm:text-base ${activeTab === tab.key
                                ? "border-primary text-primary font-semibold"
                                : "border-transparent text-gray-600 hover:text-blue-400"
                                }`}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>

                {/* Filters - Desktop inline, Mobile toggle button */}
                <div className="flex items-center gap-3 pb-3">
                    {/* Desktop filters - hidden on mobile */}
                    <div className="hidden sm:flex items-center gap-3">
                        {/* Investors Dropdown */}
                        <Select
                            placeholder="# Investors"
                            value={selectedInvestors}
                            onChange={setSelectedInvestors}
                            options={investorOptions}
                            suffixIcon={<DownOutlined className="text-gray-400" />}
                            className="w-40"
                            allowClear
                        />

                        {/* Overdue Dropdown */}
                        <Select
                            placeholder="Overdue"
                            value={selectedOverdue}
                            onChange={setSelectedOverdue}
                            options={overdueOptions}
                            suffixIcon={<DownOutlined className="text-gray-400" />}
                            className="w-32"
                            allowClear
                        />

                        {/* Search Bar */}
                        <Search
                            placeholder="Search by customer name or reference ID..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onSearch={(value) => console.log("Search:", value)}
                            className="w-80"
                            allowClear
                        />

                        {/* Reset Button */}
                        {/* <Button
                            icon={<ReloadOutlined />}
                            onClick={handleReset}
                            className="text-gray-600"
                        /> */}

                        <Button className="text-gray-600 border  rounded-lg border-gray-200 outline-none" onClick={handleReset}>
                            Reset
                        </Button>

                        {/* Settings Button */}
                        <Button
                            icon={<SettingOutlined />}
                            onClick={() => console.log("Settings clicked")}
                            className="text-gray-600"
                        />
                    </div>

                    {/* Filter toggle button - Mobile only */}
                    <Button
                        icon={<FilterOutlined />}
                        onClick={() => setShowFilters(!showFilters)}
                        className="sm:hidden text-gray-600"
                        type={showFilters ? "primary" : "default"}
                    />
                </div>
            </div>

            {/* Mobile filters dropdown */}
            <div className={`${showFilters ? 'block' : 'hidden'} sm:hidden px-2 pb-3 pt-2`}>
                <div className="flex flex-col gap-3">
                    {/* Investors Dropdown */}
                    <Select
                        placeholder="# Investors"
                        value={selectedInvestors}
                        onChange={setSelectedInvestors}
                        options={investorOptions}
                        suffixIcon={<DownOutlined className="text-gray-400" />}
                        className="w-full outline-none"
                        allowClear
                    />

                    {/* Overdue Dropdown */}
                    <Select
                        placeholder="Overdue"
                        value={selectedOverdue}
                        onChange={setSelectedOverdue}
                        options={overdueOptions}
                        suffixIcon={<DownOutlined className="text-gray-400" />}
                        className="w-full"
                        allowClear
                    />

                    {/* Search Bar */}
                    <Search
                        placeholder="Search by customer name or reference ID..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onSearch={(value) => console.log("Search:", value)}
                        className="w-full"
                        allowClear
                    />

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <Button
                            icon={<ReloadOutlined />}
                            onClick={handleReset}
                            className="text-gray-600 flex-1"
                        >
                            Reset
                        </Button>

                        <Button
                            icon={<SettingOutlined />}
                            onClick={() => console.log("Settings clicked")}
                            className="text-gray-600 flex-1"
                        >
                            Settings
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchemeTabNavigation;