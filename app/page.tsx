import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  );
}
