import { Review } from "@prisma/client";
import { calculateReviewsRatingAverage } from "../../../../utils/calculateRatingReviewsAverage";

interface ReviewProps {
  reviews: Review[];
}
const Rating = ({ reviews }: ReviewProps) => {
  return (
    <div className="flex items-end">
      <div className="rating mt-2 flex items-center">
        <p>*****</p>
        <p className="text-reg ml-3">
          {calculateReviewsRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} review{reviews.length === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
};

export default Rating;
