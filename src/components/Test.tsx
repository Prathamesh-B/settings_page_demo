import React, { useState } from 'react';
import { Mail, Upload, Info } from 'lucide-react';

const PersonalInfoForm: React.FC = () => {
  const [firstName, setFirstName] = useState('Clara');
  const [lastName, setLastName] = useState('Smith');
  const [email, setEmail] = useState('clara@bizclues.com');
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload logic here
      console.log('File dropped:', e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle file upload logic here
      console.log('File selected:', e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Personal info</h1>
          <p className="text-gray-600">Update your photo and personal details here.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
            Save
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="First name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email address <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="md:col-span-2 flex gap-3">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <button className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
              Verify
            </button>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your photo <span className="text-red-500">*</span>
              <Info className="inline h-4 w-4 text-gray-400 ml-1" />
            </label>
            <p className="text-sm text-gray-500">This will be displayed on your profile.</p>
          </div>
          <div className="md:col-span-2">
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? 'border-green-500 bg-green-50'
                  : 'border-green-500 bg-gray-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  <Upload className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <label className="cursor-pointer">
                    <span className="text-green-600 font-medium hover:text-green-700">
                      Click to upload
                    </span>
                    <span className="text-gray-600"> or drag and drop</span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileSelect}
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800×400px)
                </p>
              </div>
              
              {/* JPG indicator */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                  JPG
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;