import { PRICE, PrismaClient } from "@prisma/client";
import { RestaurantCardType } from "../page";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";
export interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

interface SearchProps {
  searchParams: SearchParams;
}

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (searchParams: SearchParams) => {
  type WhereParams = {
    location?: {
      name: {
        equals: string;
      };
    };
    cuisine?: {
      name: {
        equals: string;
      };
    };
    price?: {
      equals: PRICE;
    };
  };
  const where: WhereParams = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }
  const select = {
    id: true,
    name: true,
    main_image: true,
    slug: true,
    location: true,
    cuisine: true,
    price: true,
  };
  const restaurants = await prisma.restaurant.findMany({
    where,
    select,
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
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* Search Sidebar */}
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
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
