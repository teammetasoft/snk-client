// EditableTextInput.jsx
import React, { useState } from 'react';
import { Input } from 'antd'

function EditableTextInput({ value, onChange, isEditing, placeholder = "", type = "text" }) {
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    if (!isEditing) {
        return (
            <div className="text-darkGray font-medium text-sm">
                {type === "password" ? "••••••••" : value || <span className="text-gray-400">Not set</span>}
            </div>
        );
    }

    const handlePasswordChange = (field) => (e) => {
        const newPasswords = { ...passwords, [field]: e.target.value };
        setPasswords(newPasswords);
        setError('');

        if (field === 'confirmPassword' && newPasswords.newPassword !== e.target.value) {
            setError('Passwords do not match');
            return;
        }

        if (field === 'newPassword' && newPasswords.confirmPassword &&
            newPasswords.confirmPassword !== e.target.value) {
            setError('Passwords do not match');
            return;
        }

        if (newPasswords.oldPassword && newPasswords.newPassword &&
            newPasswords.confirmPassword && newPasswords.newPassword === newPasswords.confirmPassword) {
            onChange({
                oldPassword: newPasswords.oldPassword,
                newPassword: newPasswords.newPassword
            });
        }
    };

    return (
        <>


            {type === "password" ? (
                <div className="space-y-2">
                    <div className="space-y-1">
                        <label className="text-darkGray font-medium text-sm">Old Password</label>
                        <Input
                            type="password"
                            value={passwords.oldPassword}
                            onChange={handlePasswordChange('oldPassword')}
                            placeholder="Enter current password"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg placeholder-gray-400"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-darkGray font-medium text-sm">New Password</label>
                        <Input
                            type="password"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange('newPassword')}
                            placeholder="Enter new password"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg placeholder-gray-400"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-darkGray font-medium text-sm">Confirm Password</label>
                        <Input
                            type="password"
                            value={passwords.confirmPassword}
                            onChange={handlePasswordChange('confirmPassword')}
                            placeholder="Confirm new password"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg placeholder-gray-400"
                        />
                        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                    </div>
                </div>
            ) : (
                <Input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg placeholder-gray-400"
                />
            )}
        </>


    );
}

export default EditableTextInput;