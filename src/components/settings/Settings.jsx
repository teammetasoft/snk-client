import { useState } from 'react'

import PageHeader from "../common/header/PageHeader"

import FormSection from './fragments/FormSection';
import EditableTextInput from './fragments/EditableTextInput';
import EditableImageUpload from './fragments/EditableImageUpload';




function Settings() {

    const [values, setValues] = useState({
        fullName: 'Stalin Jason Dsouza',
        profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Stalin',
        companyName: 'S.N.K Jewellers',
        email: 'stalin@iwelcofit.com',
        phone: '7876078837',
        password: 'password123'
    });

    const [tempValues, setTempValues] = useState({ ...values });
    const [editStates, setEditStates] = useState({
        fullName: false,
        profilePicture: false,
        companyName: false,
        email: false,
        phone: false,
        password: false
    });
    const [showInfoMobile, setShowInfoMobile] = useState({
        fullName: false,
        profilePicture: false,
        companyName: false,
        email: false,
        phone: false,
        password: false
    });

    const toggleEdit = (field) => {
        setEditStates({ ...editStates, [field]: true });
        setTempValues({ ...tempValues, [field]: values[field] });
    };

    const handleSave = (field) => {
        if (field === 'password') {
            // Here you would typically make an API call to change password
            console.log('Changing password:', tempValues.password);
            // On success:
            setValues(prev => ({ ...prev, password: '••••••••' }));
        } else {
            setValues(prev => ({ ...prev, [field]: tempValues[field] }));
        }
        setEditStates(prev => ({ ...prev, [field]: false }));
    };

    const handleCancel = (field) => {
        setTempValues({ ...tempValues, [field]: values[field] });
        setEditStates({ ...editStates, [field]: false });
    };

    const handleChange = (field, value) => {
        if (field === 'password' && typeof value === 'object') {
            // Handle password change
            setTempValues(prev => ({
                ...prev,
                password: {
                    oldPassword: value.oldPassword,
                    newPassword: value.newPassword
                }
            }));
        } else {
            setTempValues(prev => ({ ...prev, [field]: value }));
        }
    };

    const toggleInfoMobile = (field) => {
        setShowInfoMobile({ ...showInfoMobile, [field]: !showInfoMobile[field] });
    };


    return (
        <div className="">
            <PageHeader
                title="Settings"
                desc="Manage your general account information."
            />
            <div className="space-y-0 px-5">
                {/* Full Name */}
                <FormSection
                    label="Full Name"
                    infoText="This is your unique digital profile link. You can customize it anytime."
                    field="fullName"
                    fieldType="text"
                    isEditing={editStates.fullName}
                    showInfoMobile={showInfoMobile.fullName}
                    onToggleInfoMobile={toggleInfoMobile}
                    onEdit={() => toggleEdit('fullName')}
                    onSave={() => handleSave('fullName')}
                    onCancel={() => handleCancel('fullName')}
                >
                    <EditableTextInput
                        value={tempValues.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        isEditing={editStates.fullName}
                        placeholder="Enter your full name"
                    />
                </FormSection>

                {/* Profile Picture */}
                <FormSection
                    label="Profile Picture"
                    infoText="This is your unique digital profile link. You can customize it anytime."
                    field="profilePicture"
                    fieldType="image"
                    isEditing={editStates.profilePicture}
                    showInfoMobile={showInfoMobile.profilePicture}
                    onToggleInfoMobile={toggleInfoMobile}
                    onEdit={() => toggleEdit('profilePicture')}
                    onSave={() => handleSave('profilePicture')}
                    onCancel={() => handleCancel('profilePicture')}
                >
                    <EditableImageUpload
                        value={tempValues.profilePicture}
                        onChange={(value) => handleChange('profilePicture', value)}
                        isEditing={editStates.profilePicture}
                    />
                </FormSection>

                {/* Company Name */}
                <FormSection
                    label="Company Name"
                    infoText="This is your unique digital profile link. You can customize it anytime."
                    field="companyName"
                    fieldType="text"
                    isEditing={editStates.companyName}
                    showInfoMobile={showInfoMobile.companyName}
                    onToggleInfoMobile={toggleInfoMobile}
                    onEdit={() => toggleEdit('companyName')}
                    onSave={() => handleSave('companyName')}
                    onCancel={() => handleCancel('companyName')}
                >
                    <EditableTextInput
                        value={tempValues.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        isEditing={editStates.companyName}
                        placeholder="Enter company name"
                    />
                </FormSection>

                {/* Email ID */}
                <FormSection
                    label="Email ID"
                    infoText="This is your unique digital profile link. You can customize it anytime."
                    field="email"
                    fieldType="email"
                    isEditing={editStates.email}
                    showInfoMobile={showInfoMobile.email}
                    onToggleInfoMobile={toggleInfoMobile}
                    onEdit={() => toggleEdit('email')}
                    onSave={() => handleSave('email')}
                    onCancel={() => handleCancel('email')}
                >
                    <EditableTextInput
                        value={tempValues.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        isEditing={editStates.email}
                        placeholder="Enter email address"
                        type="email"
                    />
                </FormSection>

                {/* Phone Number */}
                <FormSection
                    label="Phone Number"
                    infoText="This is your unique digital profile link. You can customize it anytime."
                    field="phone"
                    fieldType="text"
                    isEditing={editStates.phone}
                    showInfoMobile={showInfoMobile.phone}
                    onToggleInfoMobile={toggleInfoMobile}
                    onEdit={() => toggleEdit('phone')}
                    onSave={() => handleSave('phone')}
                    onCancel={() => handleCancel('phone')}
                >
                    <EditableTextInput
                        value={tempValues.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        isEditing={editStates.phone}
                        placeholder="Enter phone number"
                        type="tel"
                    />
                </FormSection>

                {/* Password */}
                <FormSection
                    label="Password"
                    infoText="This is your unique digital profile link. You can customize it anytime."
                    field="password"
                    fieldType="password"
                    isEditing={editStates.password}
                    showInfoMobile={showInfoMobile.password}
                    onToggleInfoMobile={toggleInfoMobile}
                    onEdit={() => toggleEdit('password')}
                    onSave={() => handleSave('password')}
                    onCancel={() => handleCancel('password')}
                >
                    <EditableTextInput
                        value={tempValues.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        isEditing={editStates.password}
                        placeholder="Enter new password"
                        type="password"
                    />
                </FormSection>
            </div>

        </div>
    )
}

export default Settings