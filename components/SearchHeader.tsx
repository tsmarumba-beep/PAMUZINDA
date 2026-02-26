import React, { useState } from 'react';
import { Input } from 'lucide-react';
import { Toggle } from 'lucide-react';

const SearchHeader = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [studentMode, setStudentMode] = useState(false);
    const [selectedUniversity, setSelectedUniversity] = useState('');
  
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
  
    const handleToggle = () => {
        setStudentMode(!studentMode);
    };

    const handleUniversityChange = (event) => {
        setSelectedUniversity(event.target.value);
    };

    return (
        <div className="flex flex-col items-center p-4 space-y-4 bg-gray-100 rounded-md">
            <div className="flex items-center space-x-2">
                <Input value={searchTerm} onChange={handleSearch} className="border rounded-md p-2 w-full text-gray-700" placeholder="Search..." />
            </div>
            <div className="flex space-x-2 items-center">
                <label className="text-gray-700">Student Mode:</label>
                <Toggle checked={studentMode} onChange={handleToggle} className="cursor-pointer" />
            </div>
            <div className="flex items-center space-x-2">
                <select value={selectedUniversity} onChange={handleUniversityChange} className="border rounded-md p-2 w-full text-gray-700">
                    <option value="">Select University</option>
                    <option value="Africa University">Africa University</option>
                    <option value="Women\u2019s University">Women’s University</option>
                    <option value="Mutare Polytechnic">Mutare Polytechnic</option>
                </select>
            </div>
        </div>
    );
};

export default SearchHeader;