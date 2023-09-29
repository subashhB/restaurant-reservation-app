import { PrismaClient, Restaurant } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
import { useSearchParams } from "next/navigation";
import { RestaurantCardType } from "../page";

interface SearchProps {
  searchParams: {
    city: string;
  };
}

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (
  city: string | undefined
): Promise<RestaurantCardType[]> => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    slug: true,
    location: true,
    cuisine: true,
    price: true,
  };
  if (!city) return prisma.restaurant.findMany({ select: select });
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select: select,
  });
  if (!restaurants) {
    throw new Error("No Restaurants found");
  }
  return restaurants;
};
const fetchLocations = async () => {
  const locations = await prisma.location.findMany({
    select: {
      name: true,
    },
  });
  return locations;
};

const fetchCuisines = async () => {
  const cuisines = await prisma.cuisine.findMany({
    select: {
      name: true,
    },
  });
  return cuisines;
};

const Search = async ({ searchParams }: SearchProps) => {
  const restaurants = await fetchRestaurantsByCity(
    searchParams.city.toLowerCase()
  );
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* Search Sidebar */}
        <SearchSideBar locations={locations} cuisines={cuisines} />
        <div className="w-5/6">
          {/* Restaurant Card */}
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p>Sorry, we didn&apos;t find any restaurants in this area.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
