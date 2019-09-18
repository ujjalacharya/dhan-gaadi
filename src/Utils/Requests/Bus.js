import axios from "axios";

export const getAvailableBusesOfOwner = () =>
  axios.get("/bus/owner-bus-available");
export const getUnavailableBusesOfOwner = () =>
  axios.get("/bus/owner-bus-unavailable");

export const addNewBus = body => axios.post("/bus", body);

export const getBusBySlug = slug => axios.get("/bus/"+ slug);

export const removeBus = slug => axios.delete("/bus/"+ slug);



// axios.post('/bus', body, { onUploadProgress: progressEvent => console.log(progressEvent.loaded) });
