import React, { useState } from "react";
import { Table, Pagination } from "antd";
import PageHeader from "../../common/header/PageHeader";
import SchemeTabNavigation from "./SchemeTabNavigation";
import mockSchemeData from "../../../utils/mockData/SchemeMockData";
import schemeColumn from "../../../utils/tableColumns/schemeColumn";
import styles from '../../../styles/TableStyles.module.css';
import { useNavigate } from 'react-router-dom'

function SchemeList() {
  const [activeTab, setActiveTab] = useState("active");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);

  const navigate = useNavigate();

  // Filter data based on active tab
  const filteredData = mockSchemeData.filter(
    (scheme) => scheme.status === activeTab
  );

  const handleAddButton = () => {
    navigate('/scheme-create')
  }

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  }
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalItems = filteredData.length;

  return (
    <div>
      <PageHeader
        title="Manage Schemes"
        desc="Manage and track all schemes in one place"
        addBtn="Add Scheme"
        handleAddButton={handleAddButton}
      />

      <div className="px-5">
        <SchemeTabNavigation activeTab={activeTab} onChange={handleTabChange} />

        {/* Table */}
        <div className="overflow-x-auto">
          <Table
            columns={schemeColumn(selectedRows, setSelectedRows, paginatedData)}
            dataSource={paginatedData}
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
            Showing {(currentPage - 1) * pageSize + 1}–
            {Math.min(currentPage * pageSize, totalItems)} of {totalItems} schemes
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