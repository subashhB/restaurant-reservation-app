import { PrismaClient } from "@prisma/client";
import Form from "./components/Form";
import Header from "./components/Header";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const Reservation = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <div className="border-t h-screen ">
      <div className="py-9 w-3/5 m-auto">
        <Header image={restaurant.main_image} name={restaurant.name} />
        <Form />
      </div>
    </div>
  );
};

export default Reservation;
