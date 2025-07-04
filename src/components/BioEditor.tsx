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
        <div className="grid grid-cols-4 gap-4 items-start border-b border-gray-200 pb-5">
            <div>
                    <label className="text-sm text-gray-700 font-bold">
                        Bio <span className="text-green-500 text-lg">*</span>
                    </label>
                <p className="text-sm text-gray-500 mt-1">Write a short introduction.</p>
            </div>

            <div className="col-span-2">
                <div className="">
                    {/* Toolbar */}
                    <div className="flex items-center gap-4 pb-3">
                        <div className="flex w-1/2 items-center space-x-1 border border-gray-300 rounded-lg py-3 px-2">
                            <select
                                value={selectedFont}
                                onChange={(e) => handleFontChange(e.target.value as FontType)}
                                className="w-full text-sm border-none focus:outline-none bg-transparent"
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
                                className={`p-1 rounded text-gray-400 hover:bg-gray-100 ${activeFormats.includes('bold') ? 'bg-gray-100' : ''
                                    }`}
                            >
                                <BoldIcon className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => toggleFormat('italic')}
                                className={`p-1 rounded text-gray-400 hover:bg-gray-100 ${activeFormats.includes('italic') ? 'bg-gray-100' : ''
                                    }`}
                            >
                                <ItalicIcon className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => toggleFormat('link')}
                                className={`p-1 rounded text-gray-400 hover:bg-gray-100 ${activeFormats.includes('link') ? 'bg-gray-100' : ''
                                    }`}
                            >
                                <LinkIcon className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => toggleFormat('bulletList')}
                                className={`p-1 rounded text-gray-400 hover:bg-gray-100 ${activeFormats.includes('bulletList') ? 'bg-gray-100' : ''
                                    }`}
                            >
                                <ListBulletIcon className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => toggleFormat('numberedList')}
                                className={`p-1 rounded text-gray-400 hover:bg-gray-100 ${activeFormats.includes('numberedList') ? 'bg-gray-100' : ''
                                    }`}
                            >
                                <NumberedListIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Text Area */}
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg py-3 px-2 focus:outline-none resize-none"
                        rows={4}
                        placeholder={placeholder}
                        maxLength={maxLength}
                    />

                    {/* Character Count */}
                    <div className="text-left">
                        <span className={`text-sm ${remainingChars < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                            {remainingChars} characters left
                        </span>
                    </div>
                </div>
            </div>

            <div></div> {/* Empty space for 4th column */}
        </div>
    );
};

export { BioEditor };