import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Home, Info, Mail, Moon, Sun, Menu, X } from 'lucide-react'; 
import { useTheme } from '../utils/ThemeContext'; 

const Navigation = () => {
  const location = useLocation();
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const baseLinkClasses = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2";
  const activeClasses = "bg-blue-600 text-white shadow-lg"; 
  const inactiveClasses = "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700";
  
  
  const handleAction = () => {
    setIsMenuOpen(false);
  };

  return (
    
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center space-x-2 group" onClick={handleAction}>
            <div className="p-2 rounded-xl bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 group-hover:scale-105 transition-transform duration-200 shadow-md">
              <Film className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
              CinemaReviews
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`${baseLinkClasses} ${
                  location.pathname === path ? activeClasses : inactiveClasses
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="hidden md:flex p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-200 relative"
            aria-label="Toggle theme"
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div 
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 p-4 border-t border-gray-200 dark:border-gray-700' 
            : 'max-h-0 opacity-0'
        } bg-white dark:bg-gray-900`}
      >
        <div className="flex flex-col space-y-2">
          
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={handleAction}
              className={`py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 flex items-center space-x-3 ${
                location.pathname === path
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
          
          <button
            onClick={() => { toggleTheme(); handleAction(); }}
            className="w-full mt-4 py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200 flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <div className="relative h-5 w-5">
              <Sun className="h-5 w-5 absolute rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
              <Moon className="h-5 w-5 absolute rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
            </div>
            <span>Toggle Theme</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
