import axios from "axios";

export const getOwners = () => axios.get("/owners");
export const getUsers = () => axios.get("/users");
export const getGuests = () => axios.get("/guests");

export const updateOwner = (id, body) => axios.put(`/owners/${id}`, body)
