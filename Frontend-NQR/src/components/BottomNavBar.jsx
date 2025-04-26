import { 
  Home, 
  Map, 
  ShoppingCart, 
  User, 
  Grid 
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'map', icon: Map, label: 'Maps', path: '/maps' },
    { id: 'category', icon: Grid, label: 'Category', path: '/category' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart', path: '/cart' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-100">
      <div className="flex items-center justify-between px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = 
            (tab.path === '/' && currentPath === '/') || 
            (tab.path !== '/' && currentPath.startsWith(tab.path));
            
          return (
            <button
              key={tab.id}
              className={`flex flex-col items-center py-2 flex-1 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
              onClick={() => handleTabClick(tab.path)}
            >
              <Icon className={`h-6 w-6 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
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