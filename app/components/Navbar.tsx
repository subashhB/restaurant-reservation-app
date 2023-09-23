import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white font-bold p-2 flex justify-between">
      <Link href="/" className="text-bold text-gray-700 text-2xl">
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
  );
};

export default Navbar;
