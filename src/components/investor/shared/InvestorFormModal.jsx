import { Modal, DatePicker, Input } from 'antd';
import dayjs from 'dayjs'; // ✅ ADD THIS

export default function InvestorFormModal({
    isOpen,
    onClose,
    onSubmit,
    title,
    formData,
    setFormData
}) {

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCancel = () => onClose();

    const handleAdd = () => onSubmit(formData);

    return (
        <Modal
            title={
                <div className="md:pb-6 pb-4 border-b border-gray-200">
                    <span className="text-black text-xl ">{title}</span>
                </div>
            }
            open={isOpen}
            onCancel={handleCancel}
            footer={
                <div className="flex w-full">
                    <button
                        key="cancel"
                        onClick={handleCancel}
                        className="px-6 py-2 text-darkGray w-full hover:bg-gray-100 border border-gray-200 rounded-md transition-colors mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        key="add"
                        onClick={handleAdd}
                        className="px-8 py-2 bg-primary w-full text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Add
                    </button>
                </div>
            }
            width={600}
        >
            <div className="space-y-4">
                {/* Row 1: Investor Name */}
                <div>
                    <label className="block text-sm text-darkGray mb-2">
                        Investor Name
                    </label>
                    <Input
                        value={formData.investorName || ''}
                        onChange={(e) => handleInputChange('investorName', e.target.value)}
                        placeholder="Enter Investor Name"
                        className="placeholder:text-lightGray"
                    />
                </div>

                {/* Row 2: Mobile Number */}
                <div>
                    <label className="block text-sm text-darkGray mb-2">
                        Mobile Number
                    </label>
                    <Input
                        value={formData.mobileNumber || ''}
                        onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                        placeholder="Enter Mobile Number"
                        className="placeholder:text-lightGray"
                    />
                </div>

                {/* Row 3: Email */}
                <div>
                    <label className="block text-sm text-darkGray mb-2">
                        Email
                    </label>
                    <Input
                        value={formData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter Email"
                        className="placeholder:text-lightGray"
                    />
                </div>

                {/* Row 4: Password */}
                <div>
                    <label className="block text-sm text-darkGray mb-2">
                        Password
                    </label>
                    <Input.Password
                        value={formData.password || ''}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Enter Password"
                        className="placeholder:text-lightGray"
                    />
                </div>

                {/* Row 5: Date of Birth */}
                <div>
                    <label className="block text-sm text-darkGray mb-2">
                        Date of Birth
                    </label>
                    <DatePicker
                        className="w-full"
                        value={formData.dateOfBirth ? dayjs(formData.dateOfBirth) : null}
                        onChange={(date) =>
                            handleInputChange('dateOfBirth', date ? date.format('YYYY-MM-DD') : '')
                        }
                    />
                </div>
            </div>
        </Modal>
    );
}
