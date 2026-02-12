import { Leaf } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'about';
  onPageChange: (page: 'home' | 'about') => void;
}

function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="relative z-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Leaf className="w-6 h-6" />
            <span className="text-2xl font-bold tracking-tight">PlantAI</span>
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onPageChange('home')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === 'home'
                  ? 'bg-white text-emerald-600 shadow-lg'
                  : 'hover:bg-white/20 hover:shadow-lg'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onPageChange('about')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === 'about'
                  ? 'bg-white text-emerald-600 shadow-lg'
                  : 'hover:bg-white/20 hover:shadow-lg'
              }`}
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
