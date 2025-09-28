import React, { useState } from "react";
import { Film } from "lucide-react";
import SearchBar from "./SearchBar";

const Hero = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[40vh] md:min-h-[60vh] flex flex-col items-center dark:bg-gray-950 bg-gray-50 transition-colors duration-500">
      <div className="absolute inset-0 z-0 opacity-70">
        <div className="w-full h-full bg-gradient-to-br from-blue-600/90 to-indigo-800/90 dark:from-gray-900 dark:to-gray-800"></div>
      </div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full z-20 transition-all duration-700 ease-in-out">
        {/* Hero Text */}
        <div
          className={`text-center space-y-8 overflow-hidden ${
            searchFocused ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
          } transition-all duration-700 ease-in-out`}
          aria-hidden={searchFocused}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm shadow-2xl flex items-center">
              <Film className="h-12 w-12 text-white mr-2" />
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Cinema Reviews
              </h1>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Discover, rate, and review the latest movies. Join our community of film enthusiasts.
          </p>
        </div>

        {/* Search Bar */}
        <div
          className={`pt-8 max-w-2xl mx-auto transition-all duration-700 ease-in-out ${
            searchFocused ? "-translate-y-16 md:-translate-y-24" : "translate-y-0"
          }`}
        >
          <SearchBar
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
