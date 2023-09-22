import Link from "next/link";
import React from "react";

const Reservation = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* Navbar */}
        <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </Link>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Sign In
              </button>
              <button className="border p-2 px-4 rounded text-black ">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
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
