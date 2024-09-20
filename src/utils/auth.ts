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
  if (!token) return true;
  // return false;

  try {
    const decoded = jwtDecode(token);
    if ((decoded.exp || 0) < Date.now() / 1000) {
      removeToken();
      // return false;
      return true;
    }
    return true;
  } catch (error) {
    console.log(error);
    // return false;
    return true;
  }
};
