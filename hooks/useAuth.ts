import axios, { AxiosError } from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const signIn = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      setAuthState({
        loading: false,
        data: response.data,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        setAuthState({
          loading: false,
          data: null,
          error: error.response?.data.errorMessage,
        });
        handleClose();
      }
    }
  };
  const signUp = async () => {};
  return { signIn, signUp };
};

export default useAuth;
