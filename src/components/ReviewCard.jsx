import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, Flag, Edit2, Trash2 } from "lucide-react";
import Button from "./Button";
import { Card, CardContent } from "./Card";
import StarRating from "./StarRating";
import { reviewService } from "../utils/reviewService"; 

const ReviewCard = ({ review, onEdit, onDelete, isOwnReview = false }) => {
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const [userActions, setUserActions] = useState({
    helpful: review.userActions?.helpful || false,
    dislike: review.userActions?.dislike || false,
    reported: review.userActions?.reported || false,
  });

  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [dislikeCount, setDislikeCount] = useState(review.dislikes);

  const refreshReview = () => {
    const reviews = reviewService.getAllReviews();
    const updated = reviews.find((r) => r.id === review.id);
    if (!updated) return;
    setHelpfulCount(updated.helpful);
    setDislikeCount(updated.dislikes);
    setUserActions({ ...updated.userActions });
  };

  const toggleHelpful = () => {
    reviewService.toggleHelpful(review.id);
    refreshReview();
  };

  const toggleDislike = () => {
    reviewService.toggleDislike(review.id);
    refreshReview();
  };

  const toggleReport = () => {
    reviewService.reportSpam(review.id);
    refreshReview();
  };

  return (
    <Card
      className="bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-none shadow-sm dark:shadow-md transition-all duration-200"
      style={{ borderRadius: "1rem" }}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4 flex-wrap">
          <div className="flex items-center space-x-3">
            <div
              className="
                w-10 h-10 rounded-full flex items-center justify-center font-semibold
                bg-blue-100 text-blue-600 dark:bg-gradient-to-r dark:from-blue-600 dark:to-indigo-600 dark:text-white
              "
            >
              {review.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {review.author}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(review.date)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mt-3 sm:mt-0">
            <StarRating rating={review.rating} readonly size="sm" showValue />
            {isOwnReview && (
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onEdit}
                  className="h-8 w-8 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                >
                  <Edit2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onDelete}
                  className="h-8 w-8 hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-900 dark:text-gray-100 mb-4">{review.comment}</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleHelpful}
              className={`rounded-lg px-3 bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:border-none hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-800/50 dark:hover:text-blue-300 ${
                userActions.helpful ? "font-bold" : ""
              }`}
            >
              <ThumbsUp className="h-4 w-4 mr-1" /> Helpful ({helpfulCount})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDislike}
              className={`rounded-lg px-3 bg-red-50 text-red-600 border border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-none hover:bg-red-100 hover:text-red-700 dark:hover:bg-red-800/50 dark:hover:text-red-300 ${
                userActions.dislike ? "font-bold" : ""
              }`}
            >
              <ThumbsDown className="h-4 w-4 mr-1" /> Dislike ({dislikeCount})
            </Button>
          </div>
          {!isOwnReview && !userActions.reported && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleReport}
              className="rounded px-2 py-1 text-gray-500 bg-gray-100 border border-gray-200 dark:text-gray-400 dark:bg-gray-800/50 dark:border-none hover:text-red-600 hover:bg-red-50 dark:hover:text-red-400 dark:hover:bg-red-900/20"
            >
              <Flag className="h-4 w-4 mr-1" /> Report
            </Button>
          )}
          {userActions.reported && (
            <span className="text-xs bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 px-3 py-1 rounded">
              Reported
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
