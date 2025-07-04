import React, { useState, useRef } from 'react';
import type { DragEvent, ChangeEvent } from 'react';
import { CloudArrowUpIcon } from './Icons';
import ProfileIcon from './ProfileIcon';
import TooltipOnHover from './TooltipOnHover';

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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-start border-b border-gray-200 pb-4 sm:pb-5">
            <div className="mb-2 sm:mb-0">
                <div className="flex items-center gap-0.5">
                    <label className="text-sm sm:text-base text-gray-700 font-bold">
                        Your photo <span className="text-green-500 text-lg">*</span>
                    </label>
                    <TooltipOnHover tooltipText="Add your Profile Photo" />
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">This will be displayed on your profile.</p>
            </div>
            <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start gap-3">
                <ProfileIcon size="lg" className="w-12 h-12 sm:w-16 sm:h-16" />
                <div
                    className={`relative w-full border-2 rounded-lg p-4 sm:p-6 text-center transition-colors cursor-pointer ${dragActive
                        ? 'border-green-700 bg-green-50'
                        : 'border-green-600 hover:border-green-700'
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

                    <div className="mx-auto w-fit p-2 border-1 border-gray-300 rounded-lg mb-2 shadow">
                        <CloudArrowUpIcon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-200" />
                    </div>

                    <div className="mt-2 sm:mt-4">
                        <button
                            type="button"
                            className="text-green-700 hover:text-green-700 font-bold text-sm sm:text-base"
                        >
                            Click to upload
                        </button>
                        <span className="text-gray-500 text-xs sm:text-sm"> or drag and drop</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>

                    {selectedFile && (
                        <div className="mt-2 text-xs sm:text-sm text-green-600">
                            Selected: {selectedFile.name}
                        </div>
                    )}
                </div>
            </div>

            <div className="hidden sm:block"></div> {/* Empty space for 4th column on larger screens */}
        </div>
    );
};

export { PhotoUpload };