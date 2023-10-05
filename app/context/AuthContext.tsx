"use client";
import { useState, createContext, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios, { AxiosError } from "axios";
import { getCookie } from "cookies-next";

interface AuthContextProps {
  children: React.ReactNode;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
}

interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

export default function AuthContext({ children }: AuthContextProps) {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  });
  const fetchUser = async () => {
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return setAuthState({
          loading: false,
          data: null,
          error: null,
        });
      }
      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        setAuthState({
          data: null,
          loading: false,
          error: error.response?.data.errorMessage,
        });
      }
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
