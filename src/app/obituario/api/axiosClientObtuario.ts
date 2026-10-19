import axios from "axios";

export const axiosClientObtuario = axios.create({
  baseURL: "/obituario-adm/",
  headers: {
    "Content-Type": "application-json"
  }
})