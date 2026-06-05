
import type { HourlyForecast } from "../types/weather";

export const generateInsight = (
    hourly: HourlyForecast[]
) => {
    const rain = Math.max(
        ...hourly.map(
            (h) =>
                h.precipitation_probability
        )
    );

    if (rain > 90) {
        return "Heavy rainfall expected. Consider postponing outdoor activities.";
    }

    if (rain > 60) {
        return "Moderate rainfall expected during the day.";
    }

    return "Weather conditions remain stable.";
};