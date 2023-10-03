"use client";
import { ChangeEvent } from "react";

interface AuthModalInputsProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

const AuthModalInputs = ({
  inputs,
  handleChangeInput,
  isSignIn,
}: AuthModalInputsProps) => {
  return (
    <div>
      {isSignIn ? null : (
        <div className="my-3 flex-justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] bg-white text-black"
            placeholder="First Name"
            value={inputs.firstName}
            name="firstName"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] bg-white text-black"
            placeholder="Last Name"
            value={inputs.lastName}
            name="lastName"
            onChange={handleChangeInput}
          />
        </div>
      )}
      <div className="my-3 flex-justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[98%] bg-white text-black"
          placeholder="E-mail Address"
          value={inputs.email}
          name="email"
          onChange={handleChangeInput}
        />
      </div>
      {isSignIn ? null : (
        <div className="my-3 flex-justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] bg-white text-black"
            placeholder="Phone No."
            value={inputs.phone}
            name="phone"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] bg-white text-black"
            placeholder="City"
            value={inputs.city}
            name="city"
            onChange={handleChangeInput}
          />
        </div>
      )}
      <div className="my-3 flex-justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-[98%] bg-white text-black"
          placeholder="Password"
          value={inputs.password}
          name="password"
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default AuthModalInputs;
