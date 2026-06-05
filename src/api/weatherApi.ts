import api from "../api/axios";
import type { WeatherParams } from "../types/weather";

export const getCurrentWeather = async (
    params: WeatherParams
) => {
    const response = await api.get("/current", {
        params,
    });

    return response.data;
};

export const getHourlyForecast = async (
    params: WeatherParams
) => {
    const response = await api.get("/hourly", {
        params,
    });

    return response.data;
};

export const getDailyForecast = async (
    params: WeatherParams
) => {
    const response = await api.get("/daily", {
        params,
    });

    return response.data;
};

