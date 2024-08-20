import axios from "axios";
import { envs } from "@/app/config/envs";

export const httpClient = axios.create({
  baseURL: envs.apiUrl
})
