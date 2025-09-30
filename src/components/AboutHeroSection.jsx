import React from 'react';
import { Film } from 'lucide-react';

const AboutHeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="hero-gradient bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-white/20 dark:bg-black/30 backdrop-blur-sm"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-sm">
            <Film className="h-16 w-16 text-blue-600 dark:text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          About CinemaReviews
        </h1>
        <p className="text-xl text-gray-800 dark:text-white/90 leading-relaxed max-w-2xl mx-auto">
          Your ultimate destination for discovering, rating, and reviewing movies. Built with passion for cinema and powered by modern web technologies.
        </p>
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
