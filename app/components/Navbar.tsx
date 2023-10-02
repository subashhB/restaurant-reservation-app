import Link from "next/link";
import LoginModal from "./LoginModal";

const Navbar = () => {
  return (
    <nav className="bg-white font-bold p-2 flex justify-between">
      <Link href="/" className="text-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <LoginModal isSignIn={true} />
          <LoginModal isSignIn={false} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
