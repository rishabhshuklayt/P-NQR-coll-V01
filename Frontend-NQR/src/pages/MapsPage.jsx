import { useState } from 'react';

import BottomNavBar from '../components/BottomNavBar';
import MyMap from '../components/MapsComponent/Leaflet';
import MapSearchBar from '../components/MapsComponent/MapSearchBar';

// const MapsPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
      
//       <MapSearchBar />
      
//       <MyMap />
      
//       <BottomNavBar />
//     </div>
//   );
// };

// export default MapsPage; 

const MapsPage = () => {
    return (
      <div className="relative w-screen h-screen overflow-hidden">
        
        {/* Map should be behind everything */}
        <div className="absolute inset-0 z-0">
          <MyMap />
        </div>
  
        {/* Search bar floats above */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-11/12 max-w-md">
          <MapSearchBar />
        </div>
  
        {/* Bottom nav at the bottom */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <BottomNavBar />
        </div>
      </div>
    );
  };
  export default MapsPage; 