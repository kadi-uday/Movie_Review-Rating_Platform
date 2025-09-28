import React from 'react';
import { cn } from '../utils/classnames';

const buttonVariants = (variant = 'default', size = 'default', className) => {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
  
  const variants = {
    default: "bg-blue-600 text-white shadow-md hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
    ghost: "hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-700 dark:text-gray-300",
    link: "text-blue-600 underline-offset-4 hover:underline",
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };
  return cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className);
};

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? 'div' : 'button';
  return <Comp className={buttonVariants(variant, size, className)} ref={ref} {...props} />;
});
Button.displayName = "Button";
export default Button;
