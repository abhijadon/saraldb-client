"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedAuth = localStorage.getItem("saral_auth");
    if (savedAuth) {
      try {
        const parsed = JSON.parse(savedAuth);
        setIsLoggedIn(parsed.isLoggedIn || false);
        setUser(parsed.user || null);
      } catch (e) {
        console.error("Failed to parse auth from localStorage", e);
      }
    }
  }, []);

  const login = (userData = { name: "Abhishek Jadon", email: "abhishek@saraldb.io" }) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem(
      "saral_auth",
      JSON.stringify({ isLoggedIn: true, user: userData })
    );
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("saral_auth");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
