// src/services/authService.js
import axios from "axios";

export const login = async (username, password) => {
  const response = await axios.post("https://peruclave.onrender.com/api/auth/login", {
    username,
    password,
  });
  return response.data;
};

export const register = async (username, password, role) => {
  const response = await axios.post("https://peruclave.onrender.com/api/auth/register", {
    username,
    password,
    role,
  });
  return response.data;
};
