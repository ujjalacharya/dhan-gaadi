import fetch from "isomorphic-unfetch";
import { API } from "../utils/config";

export const getAllTravels = async () => {
  const resp = await fetch(`${API}/travels`);
  const response = await resp.json();
  return response;
};