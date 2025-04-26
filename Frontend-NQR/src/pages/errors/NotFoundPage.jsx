import { useState, useEffect } from 'react';
import { Home, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    // Create a pulsing effect for the blur
    const blurInterval = setInterval(() => {
      setBlurAmount((prev) => {
        const newBlur = prev + 0.5;
        return newBlur > 8 ? 0 : newBlur;
      });
    }, 150);

    return () => clearInterval(blurInterval);
  }, []);

  const handleRefresh = () => {
    setRotation(rotation + 360);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Image with blur effect */}
      <div 
        className="relative w-72 h-72 md:w-96 md:h-96 rounded-full mb-8 overflow-hidden"
        style={{ filter: `blur(${blurAmount}px)` }}
      >
        <img 
          src="/images/attitude-dp.jpg" 
          alt="Encrypted attitude" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-white mb-4 glitch-text">404</h1>
      
      {/* Main message */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 py-2 px-4 bg-yellow-500/20 text-yellow-300 rounded-lg inline-block">
          <p className="animate-pulse">⚠️ Under Development ⚠️</p>
        </div>
      </div>

      {/* Interactive buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Home className="mr-2 h-5 w-5" />
          Go Home
        </button>
        <button
          onClick={handleRefresh}
          className="flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease' }}
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Refresh
        </button>
      </div>

      {/* Floating encrypted message */}
      <div className="absolute bottom-10 text-sm text-gray-500 font-mono mt-8">
        <p>Encrypted attitude. #shadow #blur #boy #cute</p>
      </div>

      {/* Add some floating particles for interactivity */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Add CSS for animations */}
      <style jsx="true">{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
        
        .glitch-text {
          position: relative;
          animation: glitch 3s infinite;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: '404';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          color: #ff00ff;
          z-index: -1;
          animation: glitch-effect 3s infinite;
        }
        
        .glitch-text::after {
          color: #00ffff;
          z-index: -2;
          animation: glitch-effect 2s infinite;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes glitch-effect {
          0% { transform: translate(0); }
          20% { transform: translate(3px, -3px); }
          40% { transform: translate(3px, 3px); }
          60% { transform: translate(-3px, -3px); }
          80% { transform: translate(-3px, 3px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage; 