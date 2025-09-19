import axios from "axios";

export const axiosClient = axios.create({
  baseURL:"https://memorialparqueuberaba.com.br/admin/wp-json/headless/v1",
  headers: {
    "Content-Type": "application/json"
  }
})