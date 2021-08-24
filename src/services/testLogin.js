import axios from "axios";

const authService = axios.create({
  baseURL: "https://api.mju.ac.th/Student/API/STUDENTe8ee4f3759cc4763a8f231965a2da6db23052020/Program/0401",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;