import { 
  Home, 
  Map, 
  ShoppingCart, 
  User, 
  Grid 
} from 'lucide-react';
import { useState } from 'react';

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'map', icon: Map, label: 'Maps' },
    { id: 'category', icon: Grid, label: 'Category' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <div className="flex items-center justify-between px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`flex flex-col items-center py-2 flex-1 ${
                activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon className={`h-6 w-6 ${
                activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'
              }`} />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar; 