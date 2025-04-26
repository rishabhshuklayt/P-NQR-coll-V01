import { useState } from 'react';
import TopBar from '../components/DynamicComponents/TopBar';
import BottomNavBar from '../components/BottomNavBar';
import MyMap from '../components/MapsComponent/Leaflet';

const MapsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar restaurantName="Store Locator" tagline="Find stores near you" />
      
      
      <MyMap />
      
      <BottomNavBar />
    </div>
  );
};

export default MapsPage; 