import React from 'react';
import { Card, CardContent } from './Card';
import { STATS } from '../utils/constants';

const AboutStatsSection = () => (
  <section className="py-16 px-2 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
        Platform Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {STATS.map((stat, idx) => (
          <Card key={idx} className="text-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm">
            <CardContent className="p-8">
              <div className="pt-2 text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AboutStatsSection;
