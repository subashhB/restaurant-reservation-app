"use client";

import Image from "next/image";
import ErrorMascot from "../../public/icons/error.png";

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={ErrorMascot} alt="error" className="w-56 mb-8" />
      <div className=" px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Aww, Snap</h3>
        <p className="text-reg font-bold">{error.message}</p>
        <p className="mt-6 text-sm font-light">Error code: 400</p>
      </div>
    </div>
  );
};

export default Error;
