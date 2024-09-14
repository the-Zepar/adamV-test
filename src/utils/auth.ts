import { jwtDecode } from "jwt-decode";

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      removeToken();
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
