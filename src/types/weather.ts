export interface WeatherParams {
    lat: number;
    lon: number;
    days?: number;
    ai?: boolean;
    units?: "metric" | "imperial";
    lang?: string;
}

export interface CurrentWeather {
    time: string;
    temperature: number;
    wind_speed: number;
    wind_direction: number;
    condition_code: string;
    icon: string;
    icon_path: string;
}

export const weatherConditions: Record<
    string,
    string
> = {
    "0": "Clear Sky",
    "1": "Mainly Clear",
    "2": "Partly Cloudy",
    "3": "Overcast",
    "51": "Light Drizzle",
    "53": "Moderate Drizzle",
    "61": "Light Rain",
    "63": "Moderate Rain",
    "65": "Heavy Rain",
};

export interface DailyForecast {
    date: string;
    temp_min: number;
    temp_max: number;
    precipitation_sum: number;
    sunrise: string;
    sunset: string;
    condition_code: string;
    icon: string;
    precipitation_probability: number;
    wind_max: number;
    icon_path: string;
}

export interface HourlyForecast {
    time: string;
    temperature: number;
    precipitation_probability: number;
    humidity: number;
    feels_like: number;
    uv_index: number;
    wind_speed: number;
    wind_gust: number;
    icon: string;
}

export interface WeatherResponse {
    location: {
        lat: number;
        lon: number;
        country: string;
        timezone: string;
    };

    current: CurrentWeather;

    hourly: HourlyForecast[];
    daily: DailyForecast[];

    ai_summary?: string;
}
