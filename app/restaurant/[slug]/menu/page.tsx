import { PrismaClient } from "@prisma/client";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavbar from "../components/RestaurantNavbar";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    throw new Error("Resturant could not be fetched");
  }
  return restaurant.items;
};

interface RestaurantMenuProps {
  params: {
    slug: string;
  };
}

const RestaurantMenu = async ({ params }: RestaurantMenuProps) => {
  const menu = await fetchRestaurantMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow ">
        <RestaurantNavbar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
};

export default RestaurantMenu;
