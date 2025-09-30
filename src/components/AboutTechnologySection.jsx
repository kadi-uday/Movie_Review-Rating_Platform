import React from 'react';
import { TECH_ITEMS } from '../utils/constants';

const AboutTechnologySection = () => (
  <section className="py-16 px-2 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Built with Modern Technology
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {TECH_ITEMS.map((tech) => (
          <div key={tech} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-800">
            <span className="font-semibold text-gray-800 dark:text-white">{tech}</span>
          </div>
        ))}
      </div>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        CinemaReviews is built using cutting-edge web technologies to ensure fast performance, beautiful design, and seamless user experience across all devices. Our data is powered by The Movie Database (TMDB), providing accurate and up-to-date movie information.
      </p>
    </div>
  </section>
);

export default AboutTechnologySection;
