import { Button, Tag, Dropdown } from "antd";
import { FiMoreVertical, FiEdit, FiEye, FiTrash2 } from "react-icons/fi";


const schemeColumn = (selectedRows, setSelectedRows, data) => [
    {
        title: (
            <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
                checked={selectedRows.length === data.length && data.length > 0}
                onChange={(e) => {
                    if (e.target.checked) {
                        setSelectedRows(data.map(item => item.key));
                    } else {
                        setSelectedRows([]);
                    }
                }}
            />
        ),
        dataIndex: "checkbox",
        key: "checkbox",
        width: 50,
        render: (_, record) => (
            <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
                checked={selectedRows.includes(record.key)}
                onChange={(e) => {
                    if (e.target.checked) {
                        setSelectedRows([...selectedRows, record.key]);
                    } else {
                        setSelectedRows(selectedRows.filter(key => key !== record.key));
                    }
                }}
            />
        )
    },
    {
        title: "Scheme Name",
        dataIndex: "schemeName",
        key: "schemeName",
        sorter: (a, b) => a.schemeName.localeCompare(b.schemeName),
        render: (text) => <span className="font-medium">{text}</span>
    },
    {
        title: "System Name",
        dataIndex: "systemName",
        key: "systemName",
        sorter: (a, b) => a.systemName.localeCompare(b.systemName)
    },
    {
        title: "Installment Plans (₹)",
        dataIndex: "installmentPlans",
        key: "installmentPlans",
        render: (plans) => (
            <span className="text-gray-600">{plans.join(", ")}</span>
        )
    },
    {
        title: "Amount Range (₹)",
        dataIndex: "amountRange",
        key: "amountRange",
        sorter: (a, b) => {
            const aMin = parseInt(a.amountRange.split(" ")[0]);
            const bMin = parseInt(b.amountRange.split(" ")[0]);
            return aMin - bMin;
        }
    },
    {
        title: "Active Users",
        dataIndex: "activeUsers",
        key: "activeUsers",
        sorter: (a, b) => a.activeUsers - b.activeUsers,
        render: (count) => <Tag color="blue">{count}</Tag>
    },
    {
        title: "Date Added",
        dataIndex: "dateAdded",
        key: "dateAdded",
        sorter: (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
    },
    {
        title: "Actions",
        key: "actions",
        render: (_, record) => {
            const items = [
                {
                    key: '1',
                    icon: <FiEye className="text-gray-600" />,
                    label: 'View',
                    onClick: () => console.log("View scheme:", record.key)
                },
                {
                    key: '2',
                    icon: <FiEdit className="text-blue-600" />,
                    label: 'Edit',
                    onClick: () => console.log("Edit scheme:", record.key)
                },
                {
                    key: '3',
                    icon: <FiTrash2 className="text-red-600" />,
                    label: 'Delete',
                    onClick: () => console.log("Delete scheme:", record.key)
                }
            ];

            return (
                <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    trigger={['click']}
                >
                    <Button
                        type="text"
                        icon={<FiMoreVertical className="text-gray-600" />}
                        className="hover:bg-gray-100 rounded-full"
                    />
                </Dropdown>
            );
        }
    }
];

export default schemeColumn;