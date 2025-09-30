import React from 'react';
import { Card, CardContent } from './Card';
import { FEATURES } from '../utils/constants';

const AboutFeaturesSection = () => (
  <section className="py-16 px-2 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
        What Makes Us Special
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, idx) => (
          <Card key={idx}
            className="pt-4 text-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm"
          >
            <CardContent className="p-8 flex flex-col items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl mb-5 bg-blue-600/10 dark:bg-blue-600/20">
                <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AboutFeaturesSection;
