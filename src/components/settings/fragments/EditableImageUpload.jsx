// EditableImageUpload.jsx
import React from 'react';
import { Upload } from 'antd';

function EditableImageUpload({ value, onChange, isEditing }) {
    const handleUploadChange = (info) => {
        if (info.file.status === 'done' || info.file.originFileObj) {
            const reader = new FileReader();
            reader.onload = (e) => {
                onChange(e.target.result);
            };
            reader.readAsDataURL(info.file.originFileObj);
        }
    };

    if (!isEditing) {
        return (
            <div className="flex items-center">
                {value ? (
                    <img src={value} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                        👤
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            {value ? (
                <img src={value} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
            ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                    👤
                </div>
            )}
            <Upload
                accept="image/*"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleUploadChange}
            >
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Choose File
                </button>
            </Upload>
        </div>
    );
}

export default EditableImageUpload;