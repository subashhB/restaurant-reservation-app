import Link from "next/link";
import { RestaurantCardType } from "../../page";
import Price from "../../components/Price";

interface RestaurantCardProps {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <div className="border-b flex pb-5 ml-4">
      <img className="w-44 rounded" src={restaurant.main_image} alt="" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <div className="ml-2 text-sm">Awesome</div>
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
