import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

// Create a new context for the login state
const AuthContext = createContext();

// Create a AuthProvider component to wrap your app
const AuthProvider = ({ children }) => {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/auth/login";
  const navigate = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (e) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(url, { email, password });
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("scmName", data.user.name);
      localStorage.setItem("scmRole", data.user.role);
      setUser(data.user);
      if (data.user.role == "user") {
        navigate("/dashboard");
      }
      if (data.user.role == "company") {
        navigate("/companydashboard");
      }
      if (data.user.role == "hospital") {
        navigate("/hospitaldashboard");
      }
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("scmName");
      localStorage.removeItem("scmRole");
      toast({
        title: "An error occurred.",
        description: "Invalid email or password",
        status: "error",
        duration: 1000,
        isClosable: true,
      });

      setEmail("");
      setPassword("");
    }

    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("scmName");
    localStorage.removeItem("scmRole");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      let location = window.location.pathname;
      if (location === "/") {
        navigate("/dashboard");
      }
      setUser({
        name: localStorage.getItem("scmName"),
        role: localStorage.getItem("scmRole"),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        login,
        email,
        setEmail,
        password,
        setPassword,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the login state and functions
const useAuth = () => {
  const {
    user,
    logout,
    login,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    setIsLoading,
  } = useContext(AuthContext);
  return {
    user,
    logout,
    login,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    setIsLoading,
  };
};

export { AuthProvider, useAuth };
