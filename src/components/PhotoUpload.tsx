import React, { useState, useRef } from 'react';
import type { DragEvent, ChangeEvent } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

interface PhotoUploadProps {
    onFileSelect?: (file: File) => void;
    maxSize?: number; // in bytes
    acceptedTypes?: string[];
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
    onFileSelect,
    maxSize = 5 * 1024 * 1024, // 5MB default
    acceptedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif']
}) => {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (file: File): void => {
        if (file.size > maxSize) {
            alert(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
            return;
        }

        if (!acceptedTypes.includes(file.type)) {
            alert(`File type must be one of: ${acceptedTypes.join(', ')}`);
            return;
        }

        setSelectedFile(file);
        if (onFileSelect) {
            onFileSelect(file);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0]);
        }
    };

    const handleClick = (): void => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Your photo <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">This will be displayed on your profile.</p>

            <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${dragActive
                        ? 'border-green-400 bg-green-50'
                        : 'border-green-300 hover:border-green-400'
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleClick}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={acceptedTypes.join(',')}
                    onChange={handleInputChange}
                    className="hidden"
                />

                <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                    <button
                        type="button"
                        className="text-green-600 hover:text-green-700 font-medium"
                    >
                        Click to upload
                    </button>
                    <span className="text-gray-500"> or drag and drop</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                </p>

                {selectedFile && (
                    <div className="mt-2 text-sm text-green-600">
                        Selected: {selectedFile.name}
                    </div>
                )}

                {/* JPG badge */}
                <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                        JPG
                    </span>
                </div>
            </div>
        </div>
    );
};

export { PhotoUpload };