import { Film, Star, Users, Zap } from 'lucide-react';

export const FEATURES = [
  {
    icon: Film,
    title: 'Discover Movies',
    description: 'Explore trending, popular, and now playing movies from The Movie Database (TMDB).',
  },
  {
    icon: Star,
    title: 'Rate & Review',
    description: 'Share your thoughts and rate movies with our intuitive 5-star rating system.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Engage with other movie enthusiasts through helpful reviews and discussions.',
  },
  {
    icon: Zap,
    title: 'Fast & Responsive',
    description: 'Enjoy a smooth, modern interface that works perfectly on all your devices.',
  },
];


export const STATS = [
  { label: 'Movies Available', value: '500K+' },
  { label: 'User Reviews', value: 'Growing' },
  { label: 'Active Users', value: 'You!' },
];

export const TECH_ITEMS = ['React', 'JavaScript', 'Tailwind CSS', 'TMDB API'];

export const CONTACT_FORM_KEY = "9d2d13f5-4533-4294-9fa0-d4552cf532f1";
// import.meta.env.VITE_CONTACT_FORM_KEY;