import Description from "./components/Description";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

const RestaurantDetails = () => {
  return (
    <>
      <Header />

      {/* Description Portion */}
      <div className="flex mx-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow ">
          <RestaurantNavbar />
          <Title />
          <Rating />
          <Description />
          <ImageGallery />
          <Reviews />
        </div>
        <div className="w-[27%] relative">
          <ReservationCard />
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
