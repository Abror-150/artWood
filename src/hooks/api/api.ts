import axios from "axios";

const api = axios.create({
  baseURL: "https://api.artwooddesign.uz",
});

export default api