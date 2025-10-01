class ReviewService {
  constructor() {
    this.REVIEWS_KEY = "movie-reviews";
    this.RATINGS_KEY = "movie-ratings";
    this.USER_ACTIONS_KEY = "user-review-actions";
  }

  getReviews(movieId) {
    const reviews = this.getAllReviews();
    return reviews.filter((review) => review.movieId === movieId);
  }

  getAllReviews() {
    const stored = localStorage.getItem(this.REVIEWS_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  addReview(movieId, rating, comment, author) {
    const reviews = this.getAllReviews();
    const newReview = {
      id: Date.now().toString(),
      movieId,
      rating,
      comment,
      author,
      date: new Date().toISOString(),
      helpful: 0,
      dislikes: 0,
      userActions: {
        helpful: false,
        dislike: false,
        reported: false,
      },
    };

    reviews.push(newReview);
    localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(reviews));
    this.updateMovieRating(movieId);
    return newReview;
  }

  updateReview(reviewId, rating, comment) {
    const reviews = this.getAllReviews();
    const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex !== -1) {
      reviews[reviewIndex] = {
        ...reviews[reviewIndex],
        rating,
        comment,
        date: new Date().toISOString(),
      };
      localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(reviews));
      this.updateMovieRating(reviews[reviewIndex].movieId);
    }
  }

  deleteReview(reviewId) {
    const reviews = this.getAllReviews();
    const review = reviews.find((r) => r.id === reviewId);
    const filteredReviews = reviews.filter((r) => r.id !== reviewId);

    localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(filteredReviews));

    if (review) {
      this.updateMovieRating(review.movieId);
    }
  }

  toggleHelpful(reviewId) {
    const reviews = this.getAllReviews();
    const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex !== -1) {
      const review = reviews[reviewIndex];
      const wasHelpful = review.userActions.helpful;

      review.userActions.helpful = !wasHelpful;
      review.helpful += wasHelpful ? -1 : 1;

      if (review.userActions.helpful && review.userActions.dislike) {
        review.userActions.dislike = false;
        review.dislikes = Math.max(0, review.dislikes - 1);
      }

      localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(reviews));
    }
  }

  toggleDislike(reviewId) {
    const reviews = this.getAllReviews();
    const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex !== -1) {
      const review = reviews[reviewIndex];
      const wasDisliked = review.userActions.dislike;

      review.userActions.dislike = !wasDisliked;
      review.dislikes += wasDisliked ? -1 : 1;

      if (review.userActions.dislike && review.userActions.helpful) {
        review.userActions.helpful = false;
        review.helpful = Math.max(0, review.helpful - 1);
      }

      localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(reviews));
    }
  }

  reportSpam(reviewId) {
    const reviews = this.getAllReviews();
    const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex !== -1) {
      reviews[reviewIndex].userActions.reported = true;
      localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(reviews));
    }
  }

  getMovieRating(movieId) {
    const reviews = this.getReviews(movieId);
    const totalReviews = reviews.length;

    if (totalReviews === 0) {
      return {
        movieId,
        averageRating: 0,
        totalReviews: 0,
      };
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / totalReviews;

    return {
      movieId,
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews,
    };
  }

  updateMovieRating(movieId) {
    const rating = this.getMovieRating(movieId);
    const ratings = this.getAllMovieRatings();
    const existingIndex = ratings.findIndex((r) => r.movieId === movieId);

    if (existingIndex !== -1) {
      ratings[existingIndex] = rating;
    } else {
      ratings.push(rating);
    }

    localStorage.setItem(this.RATINGS_KEY, JSON.stringify(ratings));
  }

  getAllMovieRatings() {
    const stored = localStorage.getItem(this.RATINGS_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  getUserReview(movieId, author) {
    const reviews = this.getReviews(movieId);
    return reviews.find((review) => review.author === author) || null;
  }
}

export const reviewService = new ReviewService();
