import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Select = ({ label, options, onSelect, icon, bg = 'bg-white', color = 'text-black' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
        setSelected(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-auto">
            <div
                className={`flex items-center justify-between px-4 py-2 border rounded-full cursor-pointer ${bg} ${color} whitespace-nowrap`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="flex items-center">
                    {icon && <span className="mr-2">{icon}</span>}
                    {selected ? selected : label}
                </span>
                <IoMdArrowDropdown className="ml-2" />
            </div>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
