import React from 'react';
import { MessageSquare } from 'lucide-react';
import Button from './Button';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import Textarea from './Textarea';
import Input from './Input';
import StarRating from './StarRating';
import ReviewCard from './ReviewCard';

const ReviewsSection = ({
  reviews,
  showReviewForm,
  setShowReviewForm,
  editingReview,
  setEditingReview,
  reviewForm,
  setReviewForm,
  handleSubmitReview,
  handleEditReview,
  handleDeleteReview,
  movieId,
  setReviews,
}) => (
  <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center space-x-2 text-gray-900 dark:text-white">
          <MessageSquare className="h-6 w-6 text-blue-600" />
          <span>Reviews ({reviews.length})</span>
        </h2>
        <Button
          onClick={() => {
            setShowReviewForm(!showReviewForm);
            setEditingReview(null);
            setReviewForm({ author: '', rating: 0, comment: '' });
          }}
          className="flex items-center space-x-2 bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-none dark:hover:bg-blue-800"
        >
          <MessageSquare className="h-4 w-4" />
          <span>{showReviewForm ? 'Cancel' : 'Write Review'}</span>
        </Button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <Card className="mb-8 bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-none shadow">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">
              {editingReview ? 'Edit Review' : 'Write a Review'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-white mb-2">Your Name</label>
              <Input
                value={reviewForm.author}
                onChange={(e) => setReviewForm({ ...reviewForm, author: e.target.value })}
                placeholder="Enter your name"
                disabled={!!editingReview}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-white mb-2">Rating</label>
              <StarRating
                rating={reviewForm.rating}
                onRatingChange={(rating) => setReviewForm({ ...reviewForm, rating })}
                size="lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-white mb-2">Review</label>
              <Textarea
                value={reviewForm.comment}
                onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                placeholder="Share your thoughts about this movie..."
                rows={4}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div className="flex space-x-3">
              <Button onClick={handleSubmitReview} className="bg-blue-600 text-white hover:bg-blue-700">
                {editingReview ? 'Update Review' : 'Submit Review'}
              </Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)} className="border-gray-200 dark:border-gray-700 dark:text-gray-300">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <Card className="bg-white/60 dark:bg-gray-900/30 border border-gray-100 dark:border-none shadow">
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-gray-300 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">No reviews yet</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Be the first to share your thoughts about this movie!</p>
              <Button className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800" onClick={() => setShowReviewForm(true)}>
                Write First Review
              </Button>
            </CardContent>
          </Card>
        ) : (
          reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              isOwnReview={false}
              onEdit={() => handleEditReview(review)}
              onDelete={() => handleDeleteReview(review.id)}
            />
          ))
        )}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
