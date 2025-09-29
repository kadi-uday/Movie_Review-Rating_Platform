import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent } from './Card';
import { tmdbService } from '../utils/tmdbService';

const CastSection = ({ cast }) => (
  <section className="py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 flex items-center space-x-2">
        <Users className="h-6 w-6 text-blue-600" />
        <span className="text-gray-900 dark:text-white">Cast</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {cast.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl overflow-hidden
              bg-white shadow border border-gray-100
              dark:bg-gray-800 dark:shadow-none dark:border-none
              flex flex-col items-center justify-between p-4 transition-colors duration-300"
          >
            <img
              src={tmdbService.getImageUrl(member.profile_path, 'w185')}
              alt={member.name}
              className="w-full h-32 object-cover rounded-lg mb-3"
              style={{ background: "#f3f4f6" }}
            />
            <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
              {member.name}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {member.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CastSection;
