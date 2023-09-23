"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            className="bg-red-600 px-9 py-2 rounded text-white"
            onClick={() => {
              if (location === "") {
                return;
              }
              router.push("/search");
            }}
          >
            Let&apos;s Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
