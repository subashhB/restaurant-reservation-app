import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

interface ReviewProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewProps) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What {reviews.length}{" "}
        {reviews.length === 1 ? "Person is" : "People are"} saying
      </h1>
      <div>
        {/* Review Card */}
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
