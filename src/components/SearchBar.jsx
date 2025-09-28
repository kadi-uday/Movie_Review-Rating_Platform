import React, { useState, useEffect, useRef } from "react";
import { Search, X, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { tmdbService } from "../utils/tmdbService";
import Input from "./Input";
import Button from "./Button";
import { Card, CardContent } from "./Card";

const SearchBar = ({ onFocus, onBlur }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
        if (onBlur) onBlur(); // Ensure to call onBlur when clicking outside results/search input
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onBlur]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }
    const searchMovies = async () => {
      setIsLoading(true);
      try {
        const searchResults = await tmdbService.searchMovies(query);
        setResults(searchResults.slice(0, 8));
        setShowResults(true);
      } catch (error) {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    const debounceTimer = setTimeout(searchMovies, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleMovieSelect = (movieId) => {
    setQuery("");
    setShowResults(false);
    navigate(`/movie/${movieId}`);
    if (onBlur) onBlur();
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
    if (onBlur) onBlur();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300 dark:text-gray-500" />
        <Input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={(e) => {
            if (onFocus) onFocus(e);
            if (query.trim()) setResults([]);
          }}
          onBlur={(e) => {
            /* Use click outside logic to close not onBlur on input, so leave empty here */
          }}
          className="w-full pl-10 pr-12 h-14 text-white placeholder:text-gray-300 dark:text-white dark:placeholder:text-gray-500 
                    bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border-white/30 dark:border-gray-700/50 focus:border-white 
                    focus:ring-2 focus:ring-white transition-all duration-300 shadow-xl"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 text-white hover:bg-white/20 dark:hover:bg-gray-700"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {showResults && (
        <Card className="absolute top-full left-0 right-0 mt-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-gray-200 dark:border-gray-700 shadow-2xl z-50 max-h-[500px] min-h-[210px] overflow-y-auto custom-scrollbar">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-4 space-y-2">
                <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            ) : results.length > 0 ? (
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {results.map((movie) => (
                  <button
                    key={movie.id}
                    onClick={() => handleMovieSelect(movie.id)}
                    className="w-full p-3 text-left hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-start space-x-3"
                  >
                    <img
                      src={tmdbService.getImageUrl(movie.poster_path, "w92")}
                      alt={movie.title}
                      className="w-10 h-14 object-cover rounded-md flex-shrink-0 shadow-md"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/92x138/1f2937/ffffff?text=No+Poster";
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate text-sm">{movie.title}</h4>
                      <p className="text-xs text-muted-foreground flex items-center mt-1">
                        <Star className="w-3 h-3 text-yellow-500 mr-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 font-semibold mr-2">
                          {movie.vote_average.toFixed(1)}
                        </span>
                        ({movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"})
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1 text-gray-500 dark:text-gray-400">
                        {movie.overview}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : query.trim() && !isLoading ? (
              <div className="p-4 text-center text-muted-foreground text-sm text-gray-500 dark:text-gray-400">
                No movies found for "{query}"
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
