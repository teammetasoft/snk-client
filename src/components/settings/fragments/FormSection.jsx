// FormSection.jsx
import React from 'react';
import { AiOutlineEdit, AiOutlineInfoCircle } from 'react-icons/ai';

function FormSection({
    label,
    infoText,
    isEditing,
    onEdit,
    onSave,
    onCancel,
    children,
    field,
    showInfoMobile,
    onToggleInfoMobile,
    className = "",
    switchComponent = null,
    fieldType = "text" // "text", "image", "password", "email"
}) {
    return (
        <div className={`flex flex-col lg:gap-10 min-h-[100px] py-6 border-b border-gray-200 lg:flex-row ${className}`}>
            {/* Left side - Label and Info */}
            <div className='lg:max-w-[250px] w-full'>
                <div className="flex items-center gap-2">
                    <div className='flex items-center gap-2'>
                        <label className="block text-base font-semibold text-darkGray">{label}</label>
                        <button
                            type="button"
                            className="block lg:hidden"
                            onClick={() => onToggleInfoMobile(field)}
                        >
                            <AiOutlineInfoCircle size={18} className="text-lightGray" />
                        </button>
                    </div>
                    {switchComponent && (
                        <div className="flex items-center gap-2">
                            {switchComponent}
                        </div>
                    )}
                </div>
                <div className={`text-sm text-lightGray mt-1 ${showInfoMobile ? 'block' : 'hidden'} lg:block`}>
                    {infoText}
                </div>
            </div>

            {/* Right side - Content and Actions */}
            <div className="flex flex-1 flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mt-4 lg:mt-0">
                <div className="flex-1">
                    {children}
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end lg:justify-start gap-2">
                    {isEditing ? (
                        <>
                            <button 
                                onClick={onSave} 
                                className="px-10 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors w-full lg:w-auto"
                            >
                                Save
                            </button>
                            <button 
                                onClick={onCancel} 
                                className="px-8 py-2 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors w-full lg:w-auto"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={onEdit}
                            className="px-6 py-2 border rounded-lg border-gray-200 flex items-center gap-2 text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            <AiOutlineEdit size={16} />
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FormSection;