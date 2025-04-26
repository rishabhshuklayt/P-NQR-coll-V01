import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomNavBar from './components/BottomNavBar'
import TopBar from './components/DynamicComponents/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar restaurantName="Taj Mahal" tagline="Authentic Indian Cuisine" />
      
  {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4 pb-16 pt-12">
      <h1 className="text-3xl font-bold mb-6">Welcome</h1>
      
      <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition">Home</button>
      <button className="px-6 py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition">Profile</button>
      <button className="px-6 py-3 bg-yellow-500 text-white rounded-2xl hover:bg-yellow-600 transition">Cart</button>
      <button className="px-6 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition">Admin Login</button>
      <button className="px-6 py-3 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition">Contact</button>
    </div> */}
    <BottomNavBar />
    </>
  )
}

export default App
