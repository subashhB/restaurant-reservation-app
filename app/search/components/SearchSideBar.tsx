interface SeachBarProps {
  locations: {
    name: string;
  }[];
  cuisines: {
    name: string;
  }[];
}

const SearchSideBar = async ({ locations, cuisines }: SeachBarProps) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2 font-bold">Region</h1>
        {locations.map((location, index) => (
          <p key={index} className="text-light text-reg">
            {location.name}
          </p>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2 font-bold">Cuisine</h1>
        {cuisines.map((cuisine, index) => (
          <p key={index} className="text-light text-reg">
            {cuisine.name}
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-t border-b border-r w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light rounded-r p-2">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
