import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";

const Reservation = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <div className="border-t h-screen ">
          <div className="py-9 w-3/5 m-auto">
            <div>
              <h3 className="font-bold">You&apos;re almost done!</h3>
              <div className="mt-5 flex">
                <img
                  className="w-32 h-18 rounded"
                  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                  alt=""
                />
                <div className="ml-4">
                  <h1 className="font-bold text-3xl">Restaurant Name</h1>
                  <div className="flex mt-3">
                    <p className="mr-6">Tue, 22, 2023</p>
                    <p className="mr-6">7:30 pm</p>
                    <p className="mr-6">3 people</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Form */}
            <div className="mt-10 flex-flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 text-black bg-white"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 text-black bg-white"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 text-black bg-white"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 text-black bg-white"
                placeholder="E-mail"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 text-black bg-white"
                placeholder="Occassion (optional)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 text-black bg-white"
                placeholder="Requests(optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete Reservation
              </button>
              <p className="mt-4 text-sm">Your privacy is protected.</p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Reservation;
