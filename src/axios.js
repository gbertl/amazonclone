import axios from "axios";

let development = process.env.NODE_ENV !== "production";

// baseURL (dev/prod)
const instance = axios.create({
  baseURL: development
    ? "http://localhost:5000/"
    : "https://mighty-wave-93588.herokuapp.com/", // api url
});

export default instance;
