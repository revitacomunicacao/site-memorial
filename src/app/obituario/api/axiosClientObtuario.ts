import axios from "axios";

// export const axiosClientObtuario = axios.create({
//   baseURL: "https://memorialparqueuberaba.com.br/obituario-adm/",
//   headers: {
//     "Content-Type": "application-json"
//   }
// })



export const axiosClientObtuario = axios.create({
  baseURL: "http://localhost/adm-obituario/",
  headers: {
    "Content-Type": "application-json"
  }
})