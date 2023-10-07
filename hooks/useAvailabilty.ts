import { partySize } from "./../data/partySize";

import axios, { AxiosError } from "axios";
import { useState } from "react";

interface fetchAvailabilityParameters {
  slug: string;
  partySize: string;
  day: string;
  time: string;
}

export default function useAvailability() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<
    { time: string; available: boolean }[] | null
  >(null);
  const fetchAvailability = async ({
    slug,
    partySize,
    day,
    time,
  }: fetchAvailabilityParameters) => {
    console.log(slug, partySize, day, time);
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      console.log("response", response);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        setError(error.response?.data.errorMessage);
      }
      setData(null);
    }
  };
  return { loading, data, error, fetchAvailability };
}
