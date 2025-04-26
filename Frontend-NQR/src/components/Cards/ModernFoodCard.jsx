import React from 'react';
import { Plus, Clock } from 'lucide-react';

function ModernFoodCard({ items = [] }) {
  // Ensure we have exactly 2 items or use defaults
  const cardItems = items.length === 2 ? items : [
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 249,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop",
      isVeg: true,
      prepTime: "25 min"
    },
    {
      id: 2,
      name: "Chicken Biryani",
      price: 299,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop",
      isVeg: false,
      prepTime: "30 min"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="grid grid-cols-2 gap-0.5 bg-gray-100">
        {cardItems.map((item, index) => (
          <div key={item.id} className="relative bg-white overflow-hidden">
            {/* Veg/Non-veg indicator */}
            <div className="absolute top-2 left-2 z-10 bg-white p-1 rounded-md shadow-sm">
              <div className={`w-3 h-3 border ${item.isVeg ? 'border-green-500' : 'border-red-500'} rounded-sm p-[1px]`}>
                <div className={`w-full h-full rounded-sm ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
            </div>
            
            {/* Add button */}
            <button className="absolute top-2 right-2 z-10 bg-white p-1 rounded-full shadow-sm">
              <Plus size={15} className="text-blue-600" />
            </button>
            
            {/* Food image */}
            <div className="h-36 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-2">
              <h3 className="font-medium text-gray-800 text-sm truncate">{item.name}</h3>
              
              <div className="flex justify-between items-center mt-1">
                <span className="font-bold text-gray-900">₹{item.price}</span>
                <div className="flex items-center text-gray-500 text-xs">
                  <Clock size={12} className="mr-1" />
                  <span>{item.prepTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModernFoodCard; 