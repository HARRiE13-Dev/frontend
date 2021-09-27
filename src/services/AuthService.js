import axios from "axios";

const authService = axios.create({
  //baseURL: "http://localhost:8000/api/",
  baseURL: process.env.VUE_APP_URL_API,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;