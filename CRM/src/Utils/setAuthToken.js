  
import axios from "axios";
import {API} from "./config"

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
   axios.defaults.baseURL = API;
};

export default setAuthToken;