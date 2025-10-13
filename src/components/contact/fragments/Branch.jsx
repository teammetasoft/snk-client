import { useState } from 'react';
import { Input } from 'antd';
import { AiOutlineDelete } from "react-icons/ai";

const { TextArea } = Input;

function Branch({ branchName , onDelete = null, showDelete = false }) {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        address: ''
    });

    const [charCount, setCharCount] = useState(0);
    const maxChars = 100;

    const handleChange = (field, value) => {
        if (field === 'address') {
            if (value.length <= maxChars) {
                setFormData({ ...formData, [field]: value });
                setCharCount(value.length);
            }
        } else {
            setFormData({ ...formData, [field]: value });
        }
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 relative p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-darkGray">{branchName}</h2>
                {showDelete && onDelete && (
                    <button
                        onClick={onDelete}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        title="Delete Branch"
                    >
                        <AiOutlineDelete className="text-2xl" />
                    </button>
                )}  
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-darkGray mb-2">
                        Email
                    </label>
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Enter email address"
                        className="text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-darkGray mb-2">
                        Phone Number
                    </label>
                    <Input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="Enter phone number"
                        className="text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-darkGray mb-2">
                        Address
                    </label>
                    <TextArea
                        value={formData.address}
                        onChange={(e) => handleChange('address', e.target.value)}
                        placeholder="Enter complete address"
                        rows={4}
                        className="text-sm resize-none"
                    />
                    <div className="text-right text-xs text-lightGray mt-1">
                        {charCount} / {maxChars}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Branch;