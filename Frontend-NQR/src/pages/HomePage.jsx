import TopBar from '../components/DynamicComponents/TopBar';
import BottomNavBar from '../components/BottomNavBar';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar restaurantName="Taj Mahal" tagline="Authentic Indian Cuisine" />
      
      <div className="flex-1 bg-gray-100 p-4 mt-12 mb-16">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <div className="space-y-4">
          <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Home</button>
          <button className="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">Profile</button>
          <button className="w-full px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition">Cart</button>
          <button className="w-full px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">Admin Login</button>
          <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">Contact</button>
        </div>
      </div>
      
      <BottomNavBar />
    </div>
  );
};

export default HomePage; 