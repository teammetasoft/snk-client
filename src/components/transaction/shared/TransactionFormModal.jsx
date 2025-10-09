import { Modal, Select, Input } from 'antd';

export default function TransactionFormModal({
    isOpen,
    onClose,
    onSubmit,
    title = "Add Transaction",
    investors = [],
    schemes = [],
    paymentModes = [],
    formData,
    setFormData
}) {

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCancel = () => {
        onClose();
    };

    const handleAdd = () => {
        onSubmit(formData);
    };

    return (
        <Modal
            title={
                <div className='md:pb-6 pb-4 border-b border-gray-200'>
                    <span className="text-black text-xl ">{title}</span>
                </div>}
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
                    </button>,
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
                {/* Row 1: Investor Name and Scheme Name */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm text-darkGray mb-2">
                            Investor Name
                        </label>
                        <Select
                            value={formData.investorName || undefined}
                            onChange={(value) => handleInputChange('investorName', value)}
                            placeholder="-- Please select investor"
                            className="w-full"
                            style={{ width: '100%' }}
                        >
                            {investors.map((investor) => (
                                <Select.Option key={investor.id || investor} value={investor.id || investor}>
                                    {investor.name || investor}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm text-darkGray mb-2">
                            Scheme Name
                        </label>
                        <Select
                            value={formData.schemeName || undefined}
                            onChange={(value) => handleInputChange('schemeName', value)}
                            placeholder="-- Please select scheme --"
                            className="w-full"
                            style={{ width: '100%' }}
                        >
                            {schemes.map((scheme) => (
                                <Select.Option key={scheme.id || scheme} value={scheme.id || scheme}>
                                    {scheme.name || scheme}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>
                </div>

                {/* Row 2: Installment Amount */}
                <div>
                    <label className="block text-sm text-darkGray mb-2">
                        Installment Amount (₹)
                    </label>
                    <Input
                        value={formData.installmentAmount}
                        onChange={(e) => handleInputChange('installmentAmount', e.target.value)}
                        placeholder="Enter amount"
                        className="placeholder:text-lightGray"
                    />
                </div>

                {/* Row 3: Payment Mode */}
                <div>
                    <label className="block text-sm text-darkGray mb-2">
                        Payment Mode
                    </label>
                    <Select
                        value={formData.paymentMode || undefined}
                        onChange={(value) => handleInputChange('paymentMode', value)}
                        placeholder="-- Please select payment mode --"
                        className="w-full"
                        style={{ width: '100%' }}
                    >
                        {paymentModes.map((mode) => (
                            <Select.Option key={mode.id || mode} value={mode.id || mode}>
                                {mode.name || mode}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
            </div>
        </Modal>
    );
}