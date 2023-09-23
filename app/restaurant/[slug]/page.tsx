import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import Header from "./components/Header";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import ImageGallery from "./components/ImageGallery";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

const RestaurantDetails = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
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
      </main>
    </main>
  );
};

export default RestaurantDetails;
