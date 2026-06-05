import axios from "axios";

export default axios.create({
    baseURL: "https://api.weather-ai.co/v1",
    headers: {
        Authorization: `Bearer ${
            import.meta.env.VITE_WEATHER_AI_KEY
        }`,
    },
});