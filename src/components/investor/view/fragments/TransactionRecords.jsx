import React, { useState } from 'react';
import { Select, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

export default function TransactionRecords() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    { value: 'All', label: 'All' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Failed', label: 'Failed' }
  ];

  const [transactions] = useState([
    {
      id: 1,
      type: 'UPI',
      amount: 5000,
      plan: 'Eterna Gold Plan',
      status: 'Completed',
      date: '25-08-2025'
    },
    {
      id: 2,
      type: 'UPI',
      amount: 5000,
      plan: 'SMART SAVER PLAN',
      status: 'Completed',
      date: '25-08-2025'
    },
    {
      id: 3,
      type: 'UPI',
      amount: 5000,
      plan: 'ETERNA GOLD PLAN',
      status: 'Completed',
      date: '25-08-2025'
    },
    {
      id: 4,
      type: 'UPI',
      amount: 5000,
      plan: 'SMART SAVER PLAN',
      status: 'Completed',
      date: '25-08-2025'
    },
    {
      id: 5,
      type: 'UPI',
      amount: 5000,
      plan: 'ETERNA GOLD PLAN',
      status: 'Completed',
      date: '26-08-2025'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto  rounded-lg ">
        {/* Header */}
        <div className="p-4 ">
          <div className="flex justify-between mb-4 items-start">
            <h1 className="text-darkGray text-xl  font-semibold ">
              Transactions
            </h1>
            <div className="flex items-center gap-2 ">
              <label>Sort:</label>
              <Select
                value={selectedFilter}
                onChange={setSelectedFilter}
                options={filterOptions}
                suffixIcon={<DownOutlined className="text-lightGray" />}
                className="w-24"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 [&>*]:border [&>*]:border-gray-200 gap-4 text-center">
            <div className="px-4 py-5 rounded-lg">
              <div className="text-lightGray text-xs mb-1">Transactions</div>
              <div className="text-darkGray font-semibold text-lg">15</div>
            </div>
            <div className="px-4 py-5 rounded-lg">
              <div className="text-lightGray text-xs mb-1">Total Amount</div>
              <div className="text-darkGray font-semibold text-lg">₹45,000</div>
            </div>
            <div className="px-4 py-5 rounded-lg">
              <div className="text-lightGray text-xs mb-1">Pending</div>
              <div className="text-darkGray font-semibold text-lg">₹5,000</div>
            </div>
          </div>
        </div>

        {/* Add Transaction Button */}
        <div className="p-4">
          <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Add Transaction
          </button>
        </div>

        {/* Transaction List */}
        <div className="divide-y max-h-[80vh] overflow-y-auto ">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-4 flex items-start gap-3">
              {/* UPI Badge */}
              <div className="flex-shrink-0 mt-1">
                <div className="bg-blue-100 text-primary text-xs font-semibold px-2 py-1 rounded">
                  {transaction.type}
                </div>
              </div>

              {/* Transaction Details */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-darkGray font-semibold text-base">
                    ₹{transaction.amount.toLocaleString()}
                  </div>
                  <div className="text-lightGray text-xs">
                    {transaction.date}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                    {transaction.status}
                  </span>
                </div>
                <div className="text-lightGray text-xs mt-1 uppercase">
                  {transaction.plan}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}