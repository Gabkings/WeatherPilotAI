import type {HourlyForecast} from "../types/weather.ts";


export const createHourlyForecast =
    (
        overrides?: Partial<HourlyForecast>
    ): HourlyForecast => ({
        time: "2026-06-04T10:00",
        temperature: 20,
        precipitation_probability: 20,
        humidity: 75,
        feels_like: 21,
        uv_index: 4,
        wind_speed: 10,
        wind_gust: 15,
        icon: "weather.svg",
        ...overrides,
    });