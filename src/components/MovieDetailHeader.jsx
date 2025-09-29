import React from 'react';
import { Calendar, Clock, Star, Play, Users } from 'lucide-react';
import { tmdbService } from '../utils/tmdbService';
import Button from './Button';

const MovieDetailHeader = ({ movie, trailer, movieRating }) => (
  <div className="relative bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    {movie.backdrop_path && (
      <div className="absolute inset-0 z-0">
        <img
          src={tmdbService.getBackdropUrl(movie.backdrop_path)}
          alt={movie.title}
          className="w-full h-full object-cover opacity-70"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70"></div>
      </div>
    )}

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Poster */}
        <div className="lg:col-span-1 flex justify-center">
          <img
            src={tmdbService.getImageUrl(movie.poster_path, 'w500')}
            alt={movie.title}
            className="rounded-lg shadow-2xl max-w-full max-h-[600px]"
          />
        </div>
        
        {/* Movie Info */}
        <div className="lg:col-span-2 space-y-8 max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-md">
            {movie.title}
          </h1>

          {movie.tagline && (
            <p className="italic text-gray-600 dark:text-blue-600 text-lg">"{movie.tagline}"</p>
          )}

          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-1.5">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>{new Date(movie.release_date).getFullYear()}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>{movie.runtime} min</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>{movie.vote_average.toFixed(1)} TMDB</span>
            </div>
            {movieRating.totalReviews > 0 && (
              <div className="flex items-center space-x-1.5">
                <Users className="h-5 w-5 text-blue-600" />
                <span>{movieRating.averageRating.toFixed(1)} ({movieRating.totalReviews} reviews)</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-4 py-1 rounded-full bg-blue-700 bg-opacity-50 text-white dark:text-blue-300 font-semibold text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg max-w-3xl">
            {movie.overview}
          </p>

          {trailer && (
            <div>
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2 px-6 py-3 rounded-md shadow-lg text-white">
                  <Play className="h-6 w-6" />
                  <span>Watch Trailer</span>
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetailHeader;
