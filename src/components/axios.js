import axios from "axios";

const instance = axios.create({
    pasURL: "http://127.0.0.1:5001/colon-42c6e/us-central1/api"
});
export default instance;