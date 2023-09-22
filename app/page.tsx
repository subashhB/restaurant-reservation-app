import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
