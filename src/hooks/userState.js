import { useCookies } from "react-cookie";

const getUserState = () => {
  const [state, setState] = useCookies(["userState"]);

  return state?.userState;
};

export const isAdmin = () => {
  const userState = getUserState();

  return userState?.loggedIn && userState?.role === "ADMIN";
};

export const isLoggedIn = () => {
  const userState = getUserState();

  return Boolean(userState?.loggedIn);
};
