import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Star, Calendar } from 'lucide-react';
import { tmdbService } from '../utils/tmdbService';
import { Card, CardContent } from './Card';

const MovieCard = ({ movie }) => {
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <Link to={`/movie/${movie.id}`} className="group block">
      <Card className="movie-card overflow-hidden border-0 bg-white dark:bg-gray-900/50 backdrop-blur-sm hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={tmdbService.getImageUrl(movie.poster_path, 'w500')}
            alt={movie.title}
            className="movie-poster w-full h-[300px] sm:h-[400px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
            <Star className="h-3 w-3 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        <CardContent className="p-4 pt-4">
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {movie.title}
          </h3>
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 text-sm mb-3">
            <Calendar className="h-4 w-4" />
            <span>{releaseYear}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed">
            {movie.overview || 'No description available.'}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
