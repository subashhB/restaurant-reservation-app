import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* Navbar */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="text-bold text-gray-700 text-2xl">
            OpenTable
          </a>
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
        {/* Header */}
        <main>
          <div className="h-64  bg-gradient-to-r from-[#0f1f47] to-[#5f6984] ">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2 p-2">
                Find your table for any occasion.
              </h1>
              {/* Search Bar */}
              <div className="overflow-hidden rounded text-left py-3 m-auto flex justify-center">
                <input
                  type="text"
                  className=" bg-white text-black rounded text-lg mr-3 w-[450px] p-2 "
                  placeholder="State, City or Town"
                />
                <button className="bg-red-600 px-9 py-2 rounded text-white">
                  Let&apos;s Go
                </button>
              </div>
            </div>
          </div>
          {/* CARD */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <img
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                alt="Card Image"
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2 text-black">
                  Food Name
                </h3>
                <div className="flex items-start">
                  <div className="flex mb-2 text-black">*****</div>
                  <p className="ml-2 text-black">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className="mr-3">Mexican</p>
                  <p className="mr-3">$$$</p>
                  <p>Toroto</p>
                </div>
                <p className="text-reg mt-1 font-bold">Booked 3 times today</p>
              </div>
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}
