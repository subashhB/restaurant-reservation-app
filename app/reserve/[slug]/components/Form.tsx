"use client";

import { ChangeEvent, useEffect, useState } from "react";
import useReservation from "../../../../hooks/useReservation";

const Form = () => {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerEmail: "",
    bookerPhone: "",
    bookerOccasion: "",
    bookerRequest: "",
  });
  const [disabled, setDisabled] = useState(false);
  const { error, loading, createReservation } = useReservation();

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
  }, [inputs]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="mt-10 flex-flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="First Name"
        name="bookerFirstName"
        value={inputs.bookerFirstName}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="Last Name"
        name="bookerLastName"
        value={inputs.bookerLastName}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="Phone Number"
        name="bookerPhone"
        value={inputs.bookerPhone}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="E-mail"
        name="bookerEmail"
        value={inputs.bookerEmail}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="Occasion (optional)"
        name="bookerOccasion"
        value={inputs.bookerOccasion}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="Requests(optional)"
        name="bookerRequest"
        value={inputs.bookerRequest}
        onChange={handleChangeInput}
      />
      <button
        className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
        disabled={disabled}
      >
        Complete Reservation
      </button>
      <p className="mt-4 text-sm">Your privacy is protected.</p>
    </div>
  );
};

export default Form;
