import React from 'react';
import { cn } from '../utils/classnames';

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl transition-colors duration-300", className)} {...props} />
));
Card.displayName = "Card";

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";
