import React, { useState } from 'react';
import FoodItemCard from '../components/Cards/FoodItemCard';
import ModernFoodCard from '../components/Cards/ModernFoodCard';
import TopBar from '../components/DynamicComponents/TopBar';
import BottomNavBar from '../components/BottomNavBar';
import { LayoutGrid, List, Filter } from 'lucide-react';

const foodItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: 249,
    description: "Cottage cheese cubes in a rich and creamy tomato-based gravy, flavored with aromatic spices.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop",
    category: "Main Course",
    isVeg: true,
    rating: 4.5,
    prepTime: "25 min"
  },
  {
    id: 2,
    name: "Chicken Biryani",
    price: 299,
    description: "Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop",
    category: "Biryani",
    isVeg: false,
    rating: 4.8,
    prepTime: "30 min"
  },
  {
    id: 3,
    name: "Masala Dosa",
    price: 169,
    description: "Crispy rice and lentil crepe filled with spiced potato filling, served with sambar and chutney.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop",
    category: "South Indian",
    isVeg: true,
    rating: 4.3,
    prepTime: "20 min"
  },
  {
    id: 4,
    name: "Butter Chicken",
    price: 329,
    description: "Tender chicken in a velvety tomato-based curry, with a touch of cream and butter.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000&auto=format&fit=crop",
    category: "Main Course",
    isVeg: false,
    rating: 4.7,
    prepTime: "28 min"
  },
  {
    id: 5,
    name: "Veg Pulao",
    price: 199,
    description: "Fragrant rice cooked with mixed vegetables and mild spices.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef4fb0e0?q=80&w=1000&auto=format&fit=crop",
    category: "Rice",
    isVeg: true,
    rating: 4.1,
    prepTime: "22 min"
  },
  {
    id: 6,
    name: "Malai Kofta",
    price: 259,
    description: "Soft potato and paneer dumplings in a rich and creamy gravy.",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=1000&auto=format&fit=crop",
    category: "Main Course",
    isVeg: true,
    rating: 4.6,
    prepTime: "25 min"
  }
];

function FoodListPage() {
  const [viewMode, setViewMode] = useState('horizontal'); // 'horizontal' or 'modern'

  const handleAddToCart = (id) => {
    console.log(`Added item ${id} to cart`);
    // Implement cart functionality here
  };

  const handleViewDetails = (id) => {
    console.log(`View details for item ${id}`);
    // Implement view details functionality here
  };

  // Group items for ModernFoodCard (2 items per card)
  const groupedItems = [];
  for (let i = 0; i < foodItems.length; i += 2) {
    if (i + 1 < foodItems.length) {
      groupedItems.push([foodItems[i], foodItems[i + 1]]);
    } else {
      groupedItems.push([foodItems[i]]);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar restaurantName="Taj Mahal" tagline="Authentic Indian Cuisine" />
      
      <div className="pt-14 pb-20 px-4">
        <div className="flex justify-between items-center mt-4 mb-6">
          <h1 className="text-2xl font-bold">Our Menu</h1>
          
          {/* View mode toggle */}
          <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('horizontal')}
              className={`p-1.5 rounded-md ${viewMode === 'horizontal' ? 'bg-white shadow-sm' : ''}`}
            >
              <List size={18} className="text-gray-700" />
            </button>
            <button 
              onClick={() => setViewMode('modern')}
              className={`p-1.5 rounded-md ${viewMode === 'modern' ? 'bg-white shadow-sm' : ''}`}
            >
              <LayoutGrid size={18} className="text-gray-700" />
            </button>
          </div>
        </div>
        
        {/* Filter options */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">All</span>
            <span className="text-gray-600 px-2 py-1">Veg</span>
            <span className="text-gray-600 px-2 py-1">Non-Veg</span>
          </div>
          <button className="flex items-center text-sm text-gray-700 py-1 px-2 rounded-md bg-gray-100">
            <Filter size={14} className="mr-1" />
            <span>Filter</span>
          </button>
        </div>
        
        {viewMode === 'horizontal' ? (
          // Horizontal cards layout
          <div className="space-y-3">
            {foodItems.map(item => (
              <FoodItemCard 
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                isVeg={item.isVeg}
                onAddToCart={() => handleAddToCart(item.id)}
                onViewDetails={() => handleViewDetails(item.id)}
              />
            ))}
          </div>
        ) : (
          // Modern 2-in-1 cards layout
          <div className="space-y-4">
            {groupedItems.map((group, index) => (
              <ModernFoodCard 
                key={index} 
                items={group.length === 2 ? group : [...group, foodItems[0]]} 
              />
            ))}
          </div>
        )}
      </div>
      
      <BottomNavBar />
    </div>
  );
}

export default FoodListPage; 