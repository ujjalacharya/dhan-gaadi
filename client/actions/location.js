import fetch from "isomorphic-unfetch";
import {API} from "../utils/config"

export const getAllLocations = async () => {
    const resp = await fetch(`${API}/locations`);
    const response = await resp.json();
    return response;
}