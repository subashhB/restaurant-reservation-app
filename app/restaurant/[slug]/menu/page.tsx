import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavbar from "../components/RestaurantNavbar";

const RestaurantMenu = () => {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow ">
        <RestaurantNavbar />
        <Menu />
      </div>
    </>
  );
};

export default RestaurantMenu;
