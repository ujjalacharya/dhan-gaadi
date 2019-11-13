import fetch from "isomorphic-unfetch";
import { API } from "../utils/config";
import queryString from "query-string";

export const getAllLocations = async () => {
  const resp = await fetch(`${API}/locations`);
  const response = await resp.json();
  return response;
};

export const searchBus = async query => {
  const queryData = queryString.stringify(query);
  const resp = await fetch(`${API}/bus/search?${queryData}`);
  const response = await resp.json();
  return response;
};
