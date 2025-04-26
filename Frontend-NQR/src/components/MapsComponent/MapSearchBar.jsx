import { Search } from 'lucide-react';
import React from 'react';

function MapSearchBar() {
  return (
    <div className="flex items-center justify-center ">
        <Search className='absolute text-gray-500 left-2' />
      <input
        type="text"
        placeholder="Search for a location"
        className="w-full h-12 rounded-full border-2 border-blue-300 p-2 pl-5 bg-white/80 shadow-md backdrop-blur-md opacity-100" // बेहतर प्रभाव के लिए backdrop-blur-sm जोड़ा गया"
      />
    </div>
  );
}

export default MapSearchBar;
