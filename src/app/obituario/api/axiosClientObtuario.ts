import axios from "axios";

export const axiosClientObtuario = axios.create({
  baseURL: "https://companhiadamidia.com.br/desenvolvimento/obtuario/admin/",
  headers: {
    "Content-Type": "application-json"
  }
})