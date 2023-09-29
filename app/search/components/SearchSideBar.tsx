import { PRICE } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../page";

interface SeachBarProps {
  locations: {
    name: string;
  }[];
  cuisines: {
    name: string;
  }[];
  searchParams: SearchParams;
}

const SearchSideBar = async ({
  locations,
  cuisines,
  searchParams,
}: SeachBarProps) => {
  const prices = [
    {
      id: 1,
      price: PRICE.CHEAP,
      label: "$",
      className: "border w-full text-reg font-light rounded-l p-2",
    },
    {
      id: 2,
      price: PRICE.REGULAR,
      label: "$$",
      className: "border-t border-b border-r w-full text-reg font-light p-2",
    },
    {
      id: 3,
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className:
        "border-r border-t border-b w-full text-reg font-light rounded-r p-2",
    },
  ];
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2 font-bold">Region</h1>
        {locations.map((location, index) => (
          <p key={index} className="text-light text-reg capitalize">
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, city: location.name },
              }}
            >
              {location.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2 font-bold">Cuisine</h1>
        {cuisines.map((cuisine, index) => (
          <p key={index} className="text-light text-reg capitalize">
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, cuisine: cuisine.name },
              }}
            >
              {cuisine.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price: price.price },
              }}
              key={price.id}
              className={price.className}
            >
              {price.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
