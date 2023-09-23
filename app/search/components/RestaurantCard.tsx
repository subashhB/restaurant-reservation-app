import Link from "next/link";

const RestaurantCard = () => {
  return (
    <div className="border-b flex pb-5">
      <img
        className="w-44 rounded"
        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
        alt=""
      />
      <div className="pl-5">
        <h2 className="text-3xl">Restaurant Name</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <div className="ml-2 text-sm">Awesome</div>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <div className="mr-4">$$$</div>
            <div className="mr-4">Mexican</div>
            <div className="mr-4">Restaurant Location</div>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/restaurantName">View More Information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
