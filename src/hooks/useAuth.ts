import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setToken, removeToken, isAuthenticated } from "../utils/auth";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // setIsLoggedIn(isAuthenticated());
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        setToken(token);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        setToken(token);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const logout = () => {
    removeToken();
    setIsLoggedIn(false);
    navigate("/login");
  };

  const googleAuth = async () => {
    try {
      // Redirect to Google OAuth URL
      window.location.href = "/api/auth/google";
    } catch (error) {
      console.error("Google Auth error:", error);
      throw error;
    }
  };

  return { isLoggedIn, login, signup, logout, googleAuth };
};
