import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "/admin/wp-json/headless/v1",
  headers: {
    "Content-Type": "application/json"
  }
})