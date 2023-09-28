import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  return prisma.restaurant.findMany();
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  console.log(restaurants);
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        <RestaurantCard />
      </div>
    </main>
  );
}
