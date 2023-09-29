import Link from "next/link";
import { RestaurantCardType } from "../../page";
import Price from "../../components/Price";
import { calculateReviewsRatingAverage } from "../../../utils/calculateRatingReviewsAverage";

interface RestaurantCardProps {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const ratingText = (): string => {
    const rating = calculateReviewsRatingAverage(restaurant.reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else return "";
  };
  return (
    <div className="border-b flex pb-5 ml-4">
      <img className="w-44 rounded" src={restaurant.main_image} alt="" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <div className="ml-2 text-sm">{ratingText()}</div>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <div className="mr-4">
              <Price price={restaurant.price} />
            </div>
            <div className="mr-4 capitalize">{restaurant.cuisine.name}</div>
            <div className="mr-4 capitalize">{restaurant.location.name}</div>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View More Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
