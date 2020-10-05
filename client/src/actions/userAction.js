import * as ActionTypes from "./types";
import axios from "axios";

export const login = (loginInfo) => {
  const request = axios
    .post("http://localhost:5000/api/users/login", loginInfo, {
      withCredentials: true,
    })
    .then((res) => res.data);
  // console.log("request:", request);
  return {
    type: ActionTypes.LOGIN,
    payload: request,
  };
};

export const logout = () => {
  const request = axios
    .get("http://localhost:5000/api/users/logout", { withCredentials: true })
    .then((res) => res.data);
  // console.log("request: ", request);
  return {
    type: ActionTypes.LOGOUT,
    payload: request,
  };
};
