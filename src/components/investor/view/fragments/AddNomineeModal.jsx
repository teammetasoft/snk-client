import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';

const { Option } = Select;

function AddNomineeModal({ isOpen, onClose, onAdd, nominee }) {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        relation: '',
        gender: '',
        mobile: '',
        email: '',
        idProof: '',
        idProofNumber: ''
    });

    useEffect(() => {
        if (nominee) {
            setFormData({
                fullName: nominee.fullName,
                dob: nominee.dob,
                relation: nominee.relation,
                gender: nominee.gender,
                mobile: nominee.mobile,
                email: nominee.email,
                idProof: nominee.idProof,
                idProofNumber: nominee.idProofNumber
            });
        } else {
            // Reset form when adding new nominee
            setFormData({
                fullName: '',
                dob: '',
                relation: '',
                gender: '',
                mobile: '',
                email: '',
                idProof: '',
                idProofNumber: ''
            });
        }
    }, [nominee, isOpen]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        onAdd(formData);
        onClose();
    };

    const handleModalClose = () => {
        setFormData({
            fullName: '',
            dob: '',
            relation: '',
            gender: '',
            mobile: '',
            email: '',
            idProof: '',
            idProofNumber: ''
        });
        onClose();
    };

    return (
        <Modal
            title={nominee ? "Edit Nominee" : "Add Nominee"}
            open={isOpen}
            onCancel={handleModalClose}
            footer={[
                <div className="w-full flex">
                    <Button key="close" className="w-full " onClick={handleModalClose}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" className="w-full " onClick={handleSubmit}>
                        {nominee ? "Update" : "Add"}
                    </Button>
                </div>

            ]}
            width={600}
        >
            <div className="space-y-4 py-4">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-darkGray mb-1">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                        placeholder="Enter full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="block text-sm font-medium text-darkGray mb-1">
                        Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <Input
                        placeholder="DD-MM-YYYY"
                        value={formData.dob}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                    />
                </div>

                {/* Relationship and Gender Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-darkGray mb-1">
                            Relationship <span className="text-red-500">*</span>
                        </label>
                        <Select
                            className="w-full"
                            placeholder="Select relationship"
                            value={formData.relation || undefined}
                            onChange={(value) => handleInputChange('relation', value)}
                        >
                            <Option value="Mother">Mother</Option>
                            <Option value="Father">Father</Option>
                            <Option value="Spouse">Spouse</Option>
                            <Option value="Son">Son</Option>
                            <Option value="Daughter">Daughter</Option>
                            <Option value="Brother">Brother</Option>
                            <Option value="Sister">Sister</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-darkGray mb-1">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <Select
                            className="w-full"
                            placeholder="Select gender"
                            value={formData.gender || undefined}
                            onChange={(value) => handleInputChange('gender', value)}
                        >
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </div>
                </div>

                {/* Mobile */}
                <div>
                    <label className="block text-sm font-medium text-darkGray mb-1">
                        Mobile <span className="text-red-500">*</span>
                    </label>
                    <Input
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-darkGray mb-1">
                        Email ID <span className="text-red-500">*</span>
                    </label>
                    <Input
                        placeholder="Enter email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                </div>

                {/* ID Proof and Number Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-darkGray mb-1">
                            ID Proof <span className="text-red-500">*</span>
                        </label>
                        <Select
                            className="w-full"
                            placeholder="Select ID proof"
                            value={formData.idProof || undefined}
                            onChange={(value) => handleInputChange('idProof', value)}
                        >
                            <Option value="Aadhaar">Aadhaar</Option>
                            <Option value="PAN">PAN</Option>
                            <Option value="Passport">Passport</Option>
                            <Option value="Driving License">Driving License</Option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-darkGray mb-1">
                            ID Proof Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                            placeholder="Enter ID proof number"
                            value={formData.idProofNumber}
                            onChange={(e) => handleInputChange('idProofNumber', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default AddNomineeModal;