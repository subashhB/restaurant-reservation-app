import { partySize } from "./../data/partySize";

import axios, { AxiosError } from "axios";
import { useState } from "react";

interface createReservationProps {
  slug: string;
  partySize: string;
  day: string;
  time: string;
  bookerFirstName: string;
  bookerLastName: string;
  bookerEmail: string;
  bookerPhone: string;
  bookerOccasion: string;
  bookerRequest: string;
}

export default function useReservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    bookerFirstName,
    bookerLastName,
    bookerEmail,
    bookerPhone,
    bookerOccasion,
    bookerRequest,
  }: createReservationProps) => {
    console.log(slug, partySize, day, time);
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/restaurant/${slug}/reserve`,
        {
          bookerFirstName,
          bookerLastName,
          bookerEmail,
          bookerPhone,
          bookerOccasion,
          bookerRequest,
        },
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        setError(error.response?.data.errorMessage);
      }
    }
  };
  return { loading, error, createReservation };
}
