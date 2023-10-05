import axios, { AxiosError } from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";
import { deleteCookie } from "cookies-next";

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
      handleClose();
    } catch (error) {
      if (error instanceof AxiosError) {
        setAuthState({
          loading: false,
          data: null,
          error: error.response?.data.errorMessage,
        });
      }
    }
  };
  const signUp = async (
    {
      firstName,
      lastName,
      city,
      email,
      phone,
      password,
    }: {
      firstName: string;
      lastName: string;
      city: string;
      email: string;
      phone: string;
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
        "http://localhost:3000/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
          city,
          phone,
        }
      );
      setAuthState({
        loading: false,
        data: response.data,
        error: null,
      });
      handleClose();
    } catch (error) {
      if (error instanceof AxiosError) {
        setAuthState({
          loading: false,
          data: null,
          error: error.response?.data.errorMessage,
        });
      }
    }
  };

  const signOut = async () => {
    deleteCookie("jwt");
    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  };

  return { signIn, signUp, signOut };
};

export default useAuth;
