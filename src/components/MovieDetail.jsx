import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { tmdbService } from '../utils/tmdbService';
import { reviewService } from '../utils/reviewService';
import Button from './Button';
import MovieDetailHeader from './MovieDetailHeader';
import ReviewsSection from './ReviewSection';
import CastSection from './CastSection';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [reviewForm, setReviewForm] = useState({ author: '', rating: 0, comment: '' });

  const movieId = parseInt(id || '0');

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieData = async () => {
      try {
        const [movieData, castData, videoData] = await Promise.all([
          tmdbService.getMovieDetails(movieId),
          tmdbService.getMovieCredits(movieId),
          tmdbService.getMovieVideos(movieId),
        ]);
        setMovie(movieData);
        setCast(castData);
        setVideos(videoData);
        setReviews(reviewService.getReviews(movieId));
      } catch (error) {
        setMovie(null);
        setCast([]);
        setVideos([]);
        setReviews([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieData();
  }, [movieId]);

  const handleSubmitReview = () => {
    if (!reviewForm.author.trim() || !reviewForm.comment.trim() || reviewForm.rating === 0) {
      alert("Please fill in all fields and provide a rating.");
      return;
    }
    try {
      const existingReview = reviewService.getUserReview(movieId, reviewForm.author);
      if (editingReview) {
        reviewService.updateReview(editingReview.id, reviewForm.rating, reviewForm.comment);
      } else if (existingReview) {
        alert("You have already reviewed this movie. You can edit your existing review.");
        return;
      } else {
        reviewService.addReview(movieId, reviewForm.rating, reviewForm.comment, reviewForm.author);
      }
      setReviews(reviewService.getReviews(movieId));
      setReviewForm({ author: '', rating: 0, comment: '' });
      setShowReviewForm(false);
      setEditingReview(null);
    } catch (error) {
      alert("Failed to submit review. Please try again.");
    }
  };

  const handleEditReview = (review) => {
    setEditingReview(review);
    setReviewForm({
      author: review.author,
      rating: review.rating,
      comment: review.comment,
    });
    setShowReviewForm(true);
  };

  const handleDeleteReview = (reviewId) => {
    reviewService.deleteReview(reviewId);
    setReviews(reviewService.getReviews(movieId));
  };

  const trailer = videos.find(video => video.type === 'Trailer') || videos[0];
  const movieRating = reviewService.getMovieRating(movieId);

  if (isLoading) {
    return <MovieDetailSkeleton />;
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Movie not found</h1>
          <Link to="/"><Button>Return to Home</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/">
          <Button variant="ghost" className="flex items-center space-x-2 hover:bg-accent/50">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Movies</span>
          </Button>
        </Link>
      </div>

      {/* Header & Poster */}
      <MovieDetailHeader 
        movie={movie} 
        trailer={trailer}
        movieRating={movieRating}
      />

      {/* Cast */}
      {cast.length > 0 && <CastSection cast={cast} />}

      {/* Reviews */}
      <ReviewsSection
        reviews={reviews}
        showReviewForm={showReviewForm}
        setShowReviewForm={setShowReviewForm}
        editingReview={editingReview}
        setEditingReview={setEditingReview}
        reviewForm={reviewForm}
        setReviewForm={setReviewForm}
        handleSubmitReview={handleSubmitReview}
        handleEditReview={handleEditReview}
        handleDeleteReview={handleDeleteReview}
        movieId={movieId}
        setReviews={setReviews}
      />
    </div>
  );
};

export default MovieDetail;

// Skeleton loader
function MovieDetailSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-shimmer h-8 bg-muted rounded w-32 mb-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1"><div className="animate-shimmer h-[600px] bg-muted rounded-lg"></div></div>
          <div className="lg:col-span-2 space-y-4">
            <div className="animate-shimmer h-8 bg-muted rounded w-3/4"></div>
            <div className="animate-shimmer h-4 bg-muted rounded w-1/2"></div>
            <div className="animate-shimmer h-20 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
