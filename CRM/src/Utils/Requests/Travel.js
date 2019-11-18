import axios from "axios";

export const getAllTravels = () => axios.get("/travels");
export const getATravel = id => axios.get(`/travels/${id}`);
export const updateTravel = (id, body) => axios.put(`/travels/${id}`, body);
export const removeTravel = id => axios.delete(`/travels/${id}`);
export const addNewTravel = body => axios.post("/travels", body);
