import { ArrowLeft, ShoppingCart } from 'lucide-react';

const TopBar = ({ restaurantName = "Restaurant Name", tagline = "Delicious food delivered" }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white shadow-sm">
      <button className="p-1">
        <ArrowLeft className="h-5 w-5 text-gray-700" />
      </button>
      
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium">{restaurantName}</h1>
        <p className="text-xs text-gray-500">{tagline}</p>
      </div>
      
      <button className="p-1 relative">
        <ShoppingCart className="h-5 w-5 text-gray-700" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
      </button>
    </div>
  );
};

export default TopBar;
