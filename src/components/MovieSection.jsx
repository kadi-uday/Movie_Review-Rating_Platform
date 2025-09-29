import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Star } from 'lucide-react';
import { tmdbService } from '../utils/tmdbService';
import MovieCard from './MovieCard';
import Button from './Button';
import { Card, CardContent } from './Card';

const MovieSection = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('trending');  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trending, popular, nowPlaying] = await Promise.all([
          tmdbService.getTrendingMovies(),
          tmdbService.getPopularMovies(),
          tmdbService.getNowPlayingMovies(),
        ]);
        setTrendingMovies(trending.slice(0, 12));
        setPopularMovies(popular.slice(0, 12));
        setNowPlayingMovies(nowPlaying.slice(0, 12));
      } catch (error) {
        setTrendingMovies([]);
        setPopularMovies([]);
        setNowPlayingMovies([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getCurrentMovies = () => {
    switch (activeSection) {
      case 'popular':
        return popularMovies;
      case 'now-playing':
        return nowPlayingMovies;
      default:
        return trendingMovies;
    }
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'popular':
        return 'Popular Movies';
      case 'now-playing':
        return 'Now Playing';
      default:
        return 'Trending Movies';
    }
  };

  const getSectionIcon = () => {
    switch (activeSection) {
      case 'popular':
        return Star;
      case 'now-playing':
        return Clock;
      default:
        return TrendingUp;
    }
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card key={index} className="overflow-hidden border-0 bg-card/50">
          <div className="animate-pulse h-[300px] sm:h-[400px] bg-muted"></div>
          <CardContent className="p-4">
            <div className="animate-pulse h-4 bg-muted rounded mb-2"></div>
            <div className="animate-pulse h-3 bg-muted rounded w-16 mb-2"></div>
            <div className="animate-pulse h-3 bg-muted rounded mb-1"></div>
            <div className="animate-pulse h-3 bg-muted rounded w-3/4"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            {React.createElement(getSectionIcon(), { className: "h-8 w-8 text-blue-500" })}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{getSectionTitle()}</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={activeSection === 'trending' ? 'default' : 'outline'}
              onClick={() => setActiveSection('trending')}
              className="flex items-center space-x-2 text-gray-800 dark:text-white"
            >
              <TrendingUp className="h-4 w-4" />
              <span>Trending</span>
            </Button>
            <Button
              variant={activeSection === 'popular' ? 'default' : 'outline'}
              onClick={() => setActiveSection('popular')}
              className="flex items-center space-x-2 text-gray-800 dark:text-white"
            >
              <Star className="h-4 w-4" />
              <span>Popular</span>
            </Button>
            <Button
              variant={activeSection === 'now-playing' ? 'default' : 'outline'}
              onClick={() => setActiveSection('now-playing')}
              className="flex items-center space-x-2 text-gray-800 dark:text-white"
            >
              <Clock className="h-4 w-4" />
              <span>Now Playing</span>
            </Button>
          </div>
        </div>

        {/* Movie Grid */}
        <div>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {getCurrentMovies().map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
