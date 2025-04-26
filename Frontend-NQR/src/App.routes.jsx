import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/errors/NotFoundPage';
import FoodListPage from './pages/FoodListPage';

// Create router with all application routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/maps',
    element: <MapsPage />,
  },
  {
    path: '/food',
    element: <FoodListPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes; 