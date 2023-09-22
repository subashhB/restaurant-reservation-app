import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* Navbar */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
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
        <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] ">
          {/* Search Bar */}
          <div className="overflow-hidden rounded text-left text-lg py-3 m-auto flex justify-center">
            <input
              type="text"
              className=" bg-white text-black rounded  mr-3 w-[450px] p-2 "
              placeholder="State, City or Town"
            />
            <button className="bg-red-600 px-9 py-2 rounded text-white">
              Let&apos;s Go
            </button>
          </div>
        </div>
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* Search Sidebar */}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2 font-bold">Region</h1>
              <p className="text-light text-reg">City Name</p>
              <p className="text-light text-reg">City Name</p>
              <p className="text-light text-reg">City Name</p>
              <p className="text-light text-reg">City Name</p>
              <p className="text-light text-reg">City Name</p>
              <p className="text-light text-reg">City Name</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2 font-bold">Cuisine</h1>
              <p className="text-light text-reg">Mexican</p>
              <p className="text-light text-reg">Italian</p>
              <p className="text-light text-reg">Japanese</p>
              <p className="text-light text-reg">Chinese</p>
              <p className="text-light text-reg">Thai</p>
              <p className="text-light text-reg">Continental</p>
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
          <div className="w-5/6">
            {/* Restaurant Card */}
            <div className="border-b flex pb-5">
              <img
                className="w-44 rounded"
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                alt=""
              />
              <div className="pl-5">
                <h2 className="text-3xl">Restaurant Name</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <div className="ml-2 text-sm">Awesome</div>
                </div>
                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <div className="mr-4">$$$</div>
                    <div className="mr-4">Mexican</div>
                    <div className="mr-4">Restaurant Location</div>
                  </div>
                </div>
                <div className="text-red-600">
                  <a href="">View More Information</a>
                </div>
              </div>
            </div>
            <div className="border-b flex pb-5">
              <img
                className="w-44 rounded"
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                alt=""
              />
              <div className="pl-5">
                <h2 className="text-3xl">Restaurant Name</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <div className="ml-2 text-sm">Awesome</div>
                </div>
                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <div className="mr-4">$$$</div>
                    <div className="mr-4">Mexican</div>
                    <div className="mr-4">Restaurant Location</div>
                  </div>
                </div>
                <div className="text-red-600">
                  <a href="">View More Information</a>
                </div>
              </div>
            </div>
            <div className="border-b flex pb-5">
              <img
                className="w-44 rounded"
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                alt=""
              />
              <div className="pl-5">
                <h2 className="text-3xl">Restaurant Name</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <div className="ml-2 text-sm">Awesome</div>
                </div>
                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <div className="mr-4">$$$</div>
                    <div className="mr-4">Mexican</div>
                    <div className="mr-4">Restaurant Location</div>
                  </div>
                </div>
                <div className="text-red-600">
                  <a href="">View More Information</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
