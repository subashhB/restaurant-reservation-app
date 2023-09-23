import Link from "next/link";
import Navbar from "../../../components/Navbar";

const RestaurantMenu = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Restaurant Name
            </h1>
          </div>
        </div>
        {/* Description Portion */}
        <div className="flex mx-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow ">
            {/* Restaurant Navbar */}
            <nav className="flex text-reg border-b pb-2">
              <Link href="/restaurant/restaurantName" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/restaurantName/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* Menu */}
            <main className="bg-white mt-5">
              <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">Menu</h1>
              </div>

              <div className="flex flex-wrap justify-between">
                {/* MENU CARD */}
                <div className="border rounded p-3 w-[49%] mb-3">
                  <h3 className="font-bold text-lg">Menu Item</h3>
                  <p className="font-light mt-1 text-sm">
                    Menu Desciption: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quasi maiores facere soluta obcaecati
                    consequatur amet id quibusdam debitis!
                  </p>
                  <p className="mt-7">$80.00</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </main>
  );
};

export default RestaurantMenu;
