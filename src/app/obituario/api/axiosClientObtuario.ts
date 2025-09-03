import axios from "axios";

export const axiosClientObtuario = axios.create({
  baseURL: "https://companhiadamidia.com.br/desenvolvimento/obituario/admin/",
  headers: {
    "Content-Type": "application-json"
  }
})