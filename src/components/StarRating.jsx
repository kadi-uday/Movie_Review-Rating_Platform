import React from "react";
import { Star } from "lucide-react";

const StarRating = ({
  rating,
  onRatingChange,
  readonly = false,
  size = "md",
  showValue = false,
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const handleStarClick = (value) => {
    if (!readonly && onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
<button
  key={star}
  type="button"
  onClick={() => handleStarClick(star)}
  disabled={readonly}
  className={`star-rating ${readonly ? "cursor-default" : "cursor-pointer hover:scale-110"} transition-all duration-200 rounded-sm focus:outline-none`}
>
  <Star
    className={`${sizeClasses[size]} ${
      star <= rating
        ? "fill-blue-600 text-blue-600 dark:fill-blue-400 dark:text-blue-400"
        : "text-gray-400 hover:text-blue-400 dark:text-gray-500 dark:hover:text-blue-400"
    } transition-colors duration-200`}
  />
</button>


        ))}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-muted-foreground ml-2">{rating.toFixed(1)}</span>
      )}
    </div>
  );
};

export default StarRating;
