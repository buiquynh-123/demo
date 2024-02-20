import instance from "./instance";

export const signup = (user) => {
  return instance.post("users", user);
};
export const getUsers = () => {
  return instance.get("users");
};
