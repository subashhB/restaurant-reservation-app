import { PrismaClient } from "@prisma/client";
import Description from "./components/Description";
import ImageGallery from "./components/ImageGallery";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchResturantBySlug = async (slug: string): Promise<Restaurant> => {
  const restuarant = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });
  if (!restuarant) {
    throw new Error("Restaurant is not defined.");
  }
  return restuarant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchResturantBySlug(params.slug);
  console.log(restaurant);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow ">
        <RestaurantNavbar slug={restaurant.slug} />
        <Title title={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <ImageGallery images={restaurant.images} />
        <Reviews />
      </div>
      <div className="w-[27%] relative">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
