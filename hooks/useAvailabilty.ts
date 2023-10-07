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
  const [data, setData] = useState(null);
  const fetchAvailability = async ({
    slug,
    partySize,
    day,
    time,
  }: fetchAvailabilityParameters) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
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
