import React, { useEffect, useState } from 'react';

function SearchBar({ onSearch }) {
    const [search, setSearch] = useState('');
    const [allSuggestions, setAllSuggestions] = useState({});
    const [selectedLocations, setSelectedLocations] = useState([]);

    useEffect(() => {
        setAllSuggestions({
            'Islamabad': '33.6995 73.0363',
            'Lahore': '31.5497 74.3436',
            'Quetta': '30.1798 66.9750',
            'Peshawar': '34.0151 71.5249',
            'Murree': '33.9078 73.3894',
            'Gilgit': '35.9208 74.3147',
            'Skardu': '35.3191 75.5812',
            'Naran': '34.9116 73.3085',
            'Kalam': '35.5729 72.5574',
            'Swat': '35.3830 72.4258',
            'Supreme Court of Pakistan': '33.72806 73.09861',
            'Dera Ghazi Khan Tehsil': '30.0561 70.6348',
            'Kahuta Tehsil': '33.5833 73.3833',
        });
    }, []);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        if (!selectedLocations.includes(selectedValue)) {
            const newSelectedLocations = [...selectedLocations, selectedValue];
            setSelectedLocations(newSelectedLocations);

            const selectedCoordinates = newSelectedLocations.map(location => allSuggestions[location].split(' ').map(Number));
            onSearch(selectedCoordinates);

            setSearch('');
        }
    };

    const handleRemoveLocation = (location) => {
        const newSelectedLocations = selectedLocations.filter(l => l !== location);
        setSelectedLocations(newSelectedLocations);

        const selectedCoordinates = newSelectedLocations.map(location => allSuggestions[location].split(' ').map(Number));
        onSearch(selectedCoordinates);
    };

    return (
        <div className='search-bar w-full flex flex-col items-center'>
            <select
                className='w-1/2 h-12 border-2 border-amber-950 text-center rounded-2xl focus:border-amber-950 my-2'
                value={search}
                onChange={handleSelectChange}
            >
                <option value='' disabled>Select a location</option>
                {Object.keys(allSuggestions).map((location) => (
                    <option
                        key={location}
                        value={location}
                        disabled={selectedLocations.includes(location)}
                        style={{ backgroundColor: selectedLocations.includes(location) ? 'green' : 'white' }}
                    >
                        {location}
                    </option>
                ))}
            </select>
            <div className='selected-locations w-1/2 mt-2 flex overflow-x-auto'>
                {selectedLocations.map((location, index) => (
                    <div
                        key={index}
                        className='selected-location flex-shrink-0 flex justify-between items-center border-2 border-amber-950 p-2 m-1 rounded'
                    >
                        <span>{location}</span>
                        <button
                            className='remove-location bg-red-500 text-white p-1 rounded ml-2'
                            onClick={() => handleRemoveLocation(location)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default SearchBar;
