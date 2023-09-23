import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

const Search = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* Search Sidebar */}
          <SearchSideBar />
          <div className="w-5/6">
            {/* Restaurant Card */}
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Search;
