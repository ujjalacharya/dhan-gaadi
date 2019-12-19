import axios from "axios";
import jwt from "jsonwebtoken";
import setAuthToken from "../setAuthToken";

import { JWT_SECRET, jwtKey } from "../config";
import {
  removeItemFromLocalStorage,
  getItemFromLocalStorage,
  setItemToLocalStorage
} from "./LocalStorage";
import { checkIfTokenExpired } from "../helpers";

export const signUp = user => axios.post("/auth-owner/signup", user);

export const signIn = user => axios.post("/auth-owner/signin", user);

export const refreshToken = id =>
  axios.post("/auth-owner/refreshToken", { _id: id });

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    setItemToLocalStorage(jwtKey, JSON.stringify(data.data));
    setAuthToken(isAuthenticated().token);
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }

  let jsontoken = getItemFromLocalStorage(jwtKey);

  let data;

  if (jsontoken) {
    let { token } = JSON.parse(jsontoken);

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      if (err) {
        if (err.expiredAt !== undefined) {
          token = checkIfTokenExpired(token);
          data = { token, user: { ...jwt.decode(token, JWT_SECRET) } };
        } else {
          data = false;
          signout();
        }
      } else {
        data = { token, user: { ...decoded } };
      }
	});
    setItemToLocalStorage(jwtKey, JSON.stringify({token}));	
    return data;
  } else {
    return false;
  }
};

export const signout = () => {
  if (typeof window !== "undefined") {
    removeItemFromLocalStorage(jwtKey);
    return true;
  }
};
