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
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* Title */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Restaurant Name</h1>
            </div>
            {/* Ratings */}
            <div className="flex items-end">
              <div className="rating mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 reviews</p>
              </div>
            </div>
            {/* Description */}
            <div className="mt-4">
              <p className="text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt sit, sed fugiat sapiente voluptatem unde autem dolor
                quibusdam ipsa quo dicta. Voluptate dignissimos obcaecati amet
                quis veniam quos soluta temporibus, facere consequatur. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
                quisquam illum alias?
              </p>
            </div>
            {/* Image Gallery */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className="w-56 h-47 mr-1 mb-1"
                  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                  alt="Image"
                />
                <img
                  className="w-56 h-47 mr-1 mb-1"
                  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                  alt="Image"
                />
                <img
                  className="w-56 h-47 mr-1 mb-1"
                  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                  alt="Image"
                />
                <img
                  className="w-56 h-47 mr-1 mb-1"
                  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                  alt="Image"
                />
                <img
                  className="w-56 h-47 mr-1 mb-1"
                  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
                  alt="Image"
                />
              </div>
            </div>
            {/* Reviews */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 People are saying
              </h1>
              <div>
                {/* Review Card */}
                <div className="border-b p-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">SB</h2>
                      </div>
                      <p className="text-center">Subash Baidya</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-light text-lg">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Commodi, aliquid blanditiis repellendus facere
                          dolorem, doloribus nostrum, reprehenderit veritatis
                          odit mollitia vel provident recusandae deserunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
