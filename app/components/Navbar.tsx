"use client";

import Link from "next/link";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  return (
    <nav className="bg-white font-bold p-2 flex justify-between">
      <Link href="/" className="text-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Logout
              </button>
            ) : (
              <>
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
