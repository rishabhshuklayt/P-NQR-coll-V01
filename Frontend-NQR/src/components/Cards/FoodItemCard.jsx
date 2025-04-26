import React from 'react'
import { ShoppingCart, Info } from 'lucide-react'

function FoodItemCard({
  name = "Paneer Butter Masala",
  price = 249,
  image = "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop",
  isVeg = true,
  onAddToCart,
  onViewDetails
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mt-2">
      <div className="flex flex-row h-28">
        {/* Food Image (Left Side) */}
        <div className="w-1/3 h-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content (Right Side) */}
        <div className="w-2/3 p-3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-1">
              {/* Title and Veg/Non-veg indicator */}
              <div className="flex items-center gap-1.5">
                <div className={`w-3 h-3 border ${isVeg ? 'border-green-500' : 'border-red-500'} rounded-sm p-[1px]`}>
                  <div className={`w-full h-full rounded-sm ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
                <h3 className="font-medium text-gray-800 text-sm truncate">{name}</h3>
              </div>
            </div>
            <span className="text-lg font-bold text-gray-900">₹{price}</span>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-2 mt-1.5">
            <button 
              onClick={onViewDetails}
              className="flex-1 py-1 px-2 border border-gray-300 rounded-full flex items-center justify-center gap-1 text-xs hover:bg-gray-50"
            >
              <Info size={12} />
              <span>Details</span>
            </button>
            <button 
              onClick={onAddToCart}
              className="flex-1 py-1 px-2 bg-blue-600 text-white rounded-full flex items-center justify-center gap-1 text-xs hover:bg-blue-700"
            >
              <ShoppingCart size={12} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodItemCard
