import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-500">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          CinemaReviews was founded in 2024 by a group of cinephiles who believe that every movie deserves a fair and thoughtful critique. Our mission is to provide unbiased, insightful reviews that help you decide what to watch next.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          We cover everything from major blockbusters to independent films, ensuring that our audience has a comprehensive view of the cinematic landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
