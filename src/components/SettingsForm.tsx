import React, { useState } from 'react';
import {
    EnvelopeIcon,
    EyeIcon,
    EyeSlashIcon,
    CheckIcon,
    ChevronDownIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import { PhotoUpload } from './PhotoUpload';
import { BioEditor } from './BioEditor';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    oldPassword: string;
    newPassword: string;
    role: string;
    country: string;
    phoneNumber: string;
    timezone: string;
    bio: string;
}

interface SettingsFormProps {
    onSave?: (data: FormData) => void;
    onCancel?: () => void;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ onSave, onCancel }) => {
    const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: 'Clara',
        lastName: 'Smith',
        email: 'clara@bizclues.com',
        oldPassword: '',
        newPassword: '',
        role: 'Admin',
        country: 'Australia',
        phoneNumber: '+1 (555) 000-0000',
        timezone: 'Pacific Standard Time (PST) UTC-08:00',
        bio: "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
    });

    const handleInputChange = (field: keyof FormData, value: string): void => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = (): void => {
        if (onSave) {
            onSave(formData);
        }
    };

    const handleCancel = (): void => {
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
                <div>
                    <h1 className="text-xl font-semibold text-gray-900">Personal info</h1>
                    <p className="text-sm text-gray-500 mt-1">Update your photo and personal details here.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                    >
                        Save
                    </button>
                </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-4 gap-4 items-center">
                    <label className="text-sm font-medium text-gray-700">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <div className="col-span-2 flex gap-4">
                        <input
                            type="text"
                            placeholder="Clara"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="Smith"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>
                    <div></div> {/* Empty space for 4th column */}
                </div>

                {/* Email */}
                <div className="grid grid-cols-4 gap-4 items-center">
                    <label className="text-sm font-medium text-gray-700">
                        Email address <span className="text-red-500">*</span>
                    </label>
                    <div className="col-span-2 relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
                        Verify
                    </button>
                </div>

                {/* Photo Upload */}
                <PhotoUpload />

                {/* Password Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Change Password</h3>
                        <p className="text-sm text-gray-500 mb-4">Your new password must be different to previously used passwords.</p>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Old Password</label>
                            <div className="relative">
                                <input
                                    type={showOldPassword ? 'text' : 'password'}
                                    value={formData.oldPassword}
                                    onChange={(e) => handleInputChange('oldPassword', e.target.value)}
                                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowOldPassword(!showOldPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showOldPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={formData.newPassword}
                                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showNewPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                                </button>
                            </div>
                            <div className="mt-2 space-y-1">
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
                                        <CheckIcon className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-500">Must be at least 8 characters</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center">
                                        <CheckIcon className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-500">Must contain one special character</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
                            Reset password
                        </button>
                    </div>
                </div>

                {/* Role */}
                <div className="grid grid-cols-4 gap-4 items-center">
                    <label className="text-sm font-medium text-gray-700">Role</label>
                    <div className="col-span-2">
                        <input
                            type="text"
                            value={formData.role}
                            disabled
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                        />
                    </div>
                    <div></div> {/* Empty space for 4th column */}
                </div>

                {/* Country */}
                <div className="grid grid-cols-4 gap-4 items-center">
                    <label className="text-sm font-medium text-gray-700">
                        Country <span className="text-red-500">*</span>
                    </label>
                    <div className="col-span-2 relative">
                        <select
                            value={formData.country}
                            onChange={(e) => handleInputChange('country', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                        >
                            <option value="Australia">🇦🇺 Australia</option>
                            <option value="United States">🇺🇸 United States</option>
                            <option value="Canada">🇨🇦 Canada</option>
                            <option value="United Kingdom">🇬🇧 United Kingdom</option>
                        </select>
                        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    <div></div> {/* Empty space for 4th column */}
                </div>

                {/* Phone Number */}
                <div className="grid grid-cols-4 gap-4 items-center">
                    <label className="text-sm font-medium text-gray-700">
                        Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="col-span-2 flex">
                        <select className="px-3 py-2 border border-green-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                            <option value="US">US</option>
                            <option value="AU">AU</option>
                            <option value="CA">CA</option>
                            <option value="GB">GB</option>
                        </select>
                        <input
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                            className="flex-1 px-3 py-2 border-t border-b border-r border-green-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
                        Verify
                    </button>
                </div>

                {/* Timezone */}
                <div className="grid grid-cols-4 gap-4 items-center">
                    <label className="text-sm font-medium text-gray-700">Timezone</label>
                    <div className="col-span-2 relative">
                        <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                            value={formData.timezone}
                            onChange={(e) => handleInputChange('timezone', e.target.value)}
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                        >
                            <option value="Pacific Standard Time (PST) UTC-08:00">Pacific Standard Time (PST) UTC-08:00</option>
                            <option value="Eastern Standard Time (EST) UTC-05:00">Eastern Standard Time (EST) UTC-05:00</option>
                            <option value="Central Standard Time (CST) UTC-06:00">Central Standard Time (CST) UTC-06:00</option>
                            <option value="Mountain Standard Time (MST) UTC-07:00">Mountain Standard Time (MST) UTC-07:00</option>
                        </select>
                        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    <div></div> {/* Empty space for 4th column */}
                </div>
                {/* Bio */}
                <BioEditor
                    value={formData.bio}
                    onChange={(value) => handleInputChange('bio', value)}
                />

                {/* Bottom Buttons */}
                <div className="flex items-center justify-end space-x-3 pt-6">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsForm;