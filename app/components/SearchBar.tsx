"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
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
  );
};

export default SearchBar;
