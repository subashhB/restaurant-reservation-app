import { PrismaClient, Review } from "@prisma/client";
import Description from "./components/Description";
import ImageGallery from "./components/ImageGallery";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  reviews: Review[];
  open_time: string;
  close_time: string;
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
      reviews: true,
      slug: true,
      open_time: true,
      close_time: true,
    },
  });
  if (!restuarant) {
    notFound();
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
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <ImageGallery images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="w-[27%] relative">
        <ReservationCard
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
        />
      </div>
    </>
  );
};

export default RestaurantDetails;
