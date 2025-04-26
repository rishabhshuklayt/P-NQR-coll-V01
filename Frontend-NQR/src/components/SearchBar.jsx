import React, { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Add logic to handle search results
  };

  return (
    <div className="flex justify-center items-center py-4">
      <form onSubmit={handleSearchSubmit} className="relative w-full max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for food, recipes, or ingredients"
          className="w-full py-2 pl-12 pr-4 rounded-full border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="16" y1="16" x2="21" y2="21" />
          </svg>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
