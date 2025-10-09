import { useState } from "react";
import { Button, Modal, Input, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default function AddItemModal({ isModalOpen, handleCancel, handleOk, items, setItems, title }) {
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (!newItem.trim()) {
            message.warning('Please enter a valid item name');
            return;
        }

        const isDuplicate = items.some(item => 
            item.name.toLowerCase() === newItem.trim().toLowerCase()
        );

        if (isDuplicate) {
            message.warning('This item already exists');
            return;
        }

        const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
        const itemToAdd = {
            id: newId,
            name: newItem.trim()
        };

        setItems([...items, itemToAdd]);
        setNewItem('');
        message.success('Item added successfully');
    };

    const handleDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
        message.success('Item deleted successfully');
    };

    const handleModalClose = () => {
        setNewItem('');
        handleCancel();
    };

    return (
        <Modal
            title={title}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleModalClose}
            footer={[
                <Button key="close" onClick={handleModalClose}>
                    Close
                </Button>
            ]}
        >
            <div className="space-y-4">
                {/* Add New Item Section */}
                <div className="flex gap-2">
                    <Input
                        placeholder="Enter item name"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        onPressEnter={handleAddItem}
                        className="flex-1"
                    />
                    <Button type="primary" onClick={handleAddItem}>
                        Add
                    </Button>
                </div>

                {/* Items List */}
                <div className="mt-4">
                    <h3 className="text-sm font-medium text-darkGray mb-2">Current Items:</h3>
                    <div className="max-h-64 overflow-y-auto space-y-2">
                        {items.length === 0 ? (
                            <p className="text-lightGray text-sm text-center py-4">No items yet</p>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <span className="text-sm text-gray-800">{item.name}</span>
                                    <Button
                                        type="text"
                                        danger
                                        icon={<DeleteOutlined />}
                                        onClick={() => handleDeleteItem(item.id)}
                                        size="small"
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
}