import axios from "axios";

export const getAvailableBusesOfOwner = () =>
  axios.get("/bus/owner-bus-available");
export const getUnavailableBusesOfOwner = () =>
  axios.get("/bus/owner-bus-unavailable");

export const addNewBus = body => {
  console.log(typeof body.image);
  return axios.post("/bus", body, {
    headers: { "Content-Type": "text/plain" }
  });
};

// axios.post('/bus', body, { onUploadProgress: progressEvent => console.log(progressEvent.loaded) });
