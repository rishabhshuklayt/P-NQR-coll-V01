import TopBar from '../components/DynamicComponents/TopBar';
import BottomNavBar from '../components/BottomNavBar';
import MapSearchBar from '../components/MapsComponent/MapSearchBar';
import CategoryCircles from '../components/DynamicComponents/CategoryComponents/CategoryCircles';
import SearchBar from '../components/SearchBar';
import FeaturedImage from '../components/FeaturedImage';
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar restaurantName="Taj Mahal" tagline="Authentic Indian Cuisine" />
     
      
      <div className="flex-1  p-4 mt-5 mb-16">
        
       
          
          <SearchBar />
          <div className="flex items-center justify-center gap-4 overflow-x-auto mt-1">
          <CategoryCircles />
          <CategoryCircles />
          <CategoryCircles />
          <CategoryCircles />
          {/* <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Home</button>
          <button className="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">Profile</button>
          <button className="w-full px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition">Cart</button>
          <button className="w-full px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">Admin Login</button>
          <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">Contact</button> */}
        </div>
        <div className='mt-2'>
          <FeaturedImage />
        </div>
      </div>
      
      <BottomNavBar />
    </div>
  );
};

export default HomePage; 