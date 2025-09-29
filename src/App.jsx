import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MovieDetail from './components/MovieDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navigation />
       <ScrollToTop />
      
      <main>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="p-8 text-center text-xl text-gray-500 dark:text-gray-400">404 - Page Not Found</div>} />
        </Routes>
      </main>

      <footer className="w-full text-center p-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 mt-12">
        &copy; {new Date().getFullYear()} CinemaReviews. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
