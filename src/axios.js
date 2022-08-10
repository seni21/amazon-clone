import axios from "axios";

const instance = axios.create({
// the API (cloud function) URL
 baseURL:"http://localhost:5001/clone-c6973/us-central1/api)",
});
export default instance;