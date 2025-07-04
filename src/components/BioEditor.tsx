import React, { useState } from 'react';
import {
    BoldIcon,
    ItalicIcon,
    LinkIcon,
    ListBulletIcon,
    NumberedListIcon
} from '@heroicons/react/24/outline';

interface BioEditorProps {
    value: string;
    onChange: (value: string) => void;
    maxLength?: number;
    placeholder?: string;
}

type FormatType = 'bold' | 'italic' | 'link' | 'bulletList' | 'numberedList';
type FontType = 'Regular' | 'Heading 1' | 'Heading 2';

const BioEditor: React.FC<BioEditorProps> = ({
    value,
    onChange,
    maxLength = 275,
    placeholder = "Tell us about yourself..."
}) => {
    const [activeFormats, setActiveFormats] = useState<FormatType[]>([]);
    const [selectedFont, setSelectedFont] = useState<FontType>('Regular');

    const toggleFormat = (format: FormatType): void => {
        setActiveFormats(prev =>
            prev.includes(format)
                ? prev.filter(f => f !== format)
                : [...prev, format]
        );
    };

    const handleFontChange = (font: FontType): void => {
        setSelectedFont(font);
    };

    const remainingChars = maxLength - value.length;

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-3">Write a short introduction.</p>

            <div className="border border-gray-300 rounded-lg">
                {/* Toolbar */}
                <div className="flex items-center justify-between p-3 border-b border-gray-200">
                    <div className="flex items-center space-x-1">
                        <select
                            value={selectedFont}
                            onChange={(e) => handleFontChange(e.target.value as FontType)}
                            className="text-sm border-none focus:outline-none bg-transparent"
                        >
                            <option value="Regular">Regular</option>
                            <option value="Heading 1">Heading 1</option>
                            <option value="Heading 2">Heading 2</option>
                        </select>
                    </div>

                    <div className="flex items-center space-x-1">
                        <button
                            type="button"
                            onClick={() => toggleFormat('bold')}
                            className={`p-1 rounded hover:bg-gray-100 ${activeFormats.includes('bold') ? 'bg-gray-100' : ''
                                }`}
                        >
                            <BoldIcon className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleFormat('italic')}
                            className={`p-1 rounded hover:bg-gray-100 ${activeFormats.includes('italic') ? 'bg-gray-100' : ''
                                }`}
                        >
                            <ItalicIcon className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleFormat('link')}
                            className={`p-1 rounded hover:bg-gray-100 ${activeFormats.includes('link') ? 'bg-gray-100' : ''
                                }`}
                        >
                            <LinkIcon className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleFormat('bulletList')}
                            className={`p-1 rounded hover:bg-gray-100 ${activeFormats.includes('bulletList') ? 'bg-gray-100' : ''
                                }`}
                        >
                            <ListBulletIcon className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleFormat('numberedList')}
                            className={`p-1 rounded hover:bg-gray-100 ${activeFormats.includes('numberedList') ? 'bg-gray-100' : ''
                                }`}
                        >
                            <NumberedListIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Text Area */}
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full p-3 border-none focus:outline-none resize-none"
                    rows={4}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />

                {/* Character Count */}
                <div className="px-3 py-2 border-t border-gray-200 text-right">
                    <span className={`text-sm ${remainingChars < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                        {remainingChars} characters left
                    </span>
                </div>
            </div>
        </div>
    );
};

export { BioEditor };