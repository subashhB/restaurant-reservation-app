import Navbar from "../../../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavbar from "../components/RestaurantNavbar";

const RestaurantMenu = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex mx-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow ">
            <RestaurantNavbar />
            <Menu />
          </div>
        </div>
      </main>
    </main>
  );
};

export default RestaurantMenu;
