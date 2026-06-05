import axios from "axios";

export default axios.create({
    baseURL: "https://api.weather-ai.co/v1",
    headers: {
        Authorization: `Bearer wai_2ee780.00a6e0d8c3167d93a3e70287564a9beb30b9d07a99d75ede`,
    },
});