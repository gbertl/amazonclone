import axios from "axios";

let development = process.env.NODE_ENV !== "production";

// baseURL (dev/prod)
const instance = axios.create({
  baseURL: development
    ? "http://localhost:5001/clone-1e474/us-central1/api"
    : "https://us-central1-clone-1e474.cloudfunctions.net/api",
});

export default instance;
