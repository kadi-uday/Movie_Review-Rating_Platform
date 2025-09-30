import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 text-muted-foreground dark:text-white mb-4">
          <span>Made with</span>
          <Heart className="h-5 w-5 text-red-500 fill-current" />
          <span>for movie enthusiasts</span>
        </div>
        <p className="text-sm text-muted-foreground dark:text-white">
          CinemaReviews • Your ultimate movie discovery platform
        </p>
      </div>
    </section>
  );
};

export default Footer;
