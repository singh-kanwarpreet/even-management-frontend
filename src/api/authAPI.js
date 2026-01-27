import axios from "./axios";

export const loginUser = async (credentials) => {
  const res = await axios.post("auth/user/login", credentials);
  return res.data;
};

export const signupUser = async (userInfo) => {
  const res = await axios.post("auth/user/signup", userInfo);
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.get("auth/user/logout");
  return res.data;
};
