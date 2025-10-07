import React, { useState } from "react";
import { Table, Pagination } from "antd";
import PageHeader from "../common/PageHeader";
import TabNavigation from "../common/TabNavigation";
import mockSchemeData from "../../utils/mockData/SchemeMockData";
import schemeColumn from "../../utils/tableColumns/schemeColumn";
import styles from '../../styles/TableStyles.module.css';

function SchemeList() {
  const [activeTab, setActiveTab] = useState("active");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filter data based on active tab
  const filteredData = mockSchemeData.filter(
    (scheme) => scheme.status === activeTab
  );

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const totalItems = filteredData.length;

  return (
    <div>
      <PageHeader
        title="Manage Schemes"
        desc="Manage and track all schemes in one place"
        addBtn="Add Scheme"
      />

      <div className="px-5">
        <TabNavigation activeTab={activeTab} onChange={setActiveTab} />

        {/* Table */}
        <div className="overflow-x-auto">
          <Table
            columns={schemeColumn}
            dataSource={filteredData}
            loading={loading}
            pagination={false}
            className="bg-white rounded-lg"
            rowClassName={(record, index) =>
              index % 2 === 0 ? styles.tableRowLight : styles.tableRowDark
            }
          />
        </div>


        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between p-4 bg-white rounded-lg">
          <span className="text-gray-600">
            Showing {totalItems} of {totalItems} schemes
          </span>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={totalItems}
            onChange={handlePageChange}
            showSizeChanger
            pageSizeOptions={["5", "10", "20", "50"]}
          />
        </div>
      </div>
    </div>
  );
}

export default SchemeList;