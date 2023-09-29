import { Review } from "@prisma/client";

export const calculateReviewsRatingAverage = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((acc, reviews) => {
      return acc + reviews.rating;
    }, 0) / reviews.length
  );
};
