import React, { useEffect, useState } from 'react';

function SearchBar({onSearch}) {
    const [search, setSearch] = useState('');
    const [allSuggestions, setAllSuggestions] = useState({});

    useEffect(() => {
        setAllSuggestions({
            'Islamabad': '33.6995 73.0363',
            'Lahore': '31.5497 74.3436',
            'Karachi': '24.8607 67.0011',
            'Quetta': '30.1798 66.9750',
            'Peshawar': '34.0151 71.5249',
            'Murree': '33.9078 73.3894',
            'Gilgit': '35.9208 74.3147',
            'Skardu': '35.3191 75.5812',
            'Naran': '34.9116 73.3085',
            'Kalam': '35.5729 72.5574',
            'Swat': '35.3830 72.4258',
            'Supreme Court of Pakistan': '33.72806 73.09861'
        });
    }, []);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSearch(selectedValue);
        onSearch(allSuggestions[selectedValue]);
    };

    return (
        <div className='search-bar w-full flex justify-center'>
            <select
                className='w-1/2 h-12 border-2 border-amber-950 text-center rounded-2xl focus:border-amber-950 my-2'
                value={search}
                onChange={handleSelectChange}
            >
                <option value='' disabled>Select a location</option>
                {Object.keys(allSuggestions).map((location) => (
                    <option key={location} value={location}>
                        {location}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SearchBar;
