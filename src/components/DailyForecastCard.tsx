
import {
    FaSun,
    FaWind,
    FaCloudRain,
} from "react-icons/fa";


import type { DailyForecast } from "../types/weather";


interface Props {
    data: DailyForecast[];
}



const DailyForecastCard = ({data}: Props) => {
    return (
        <div>
            <h2 className="text-center text-2xl font-bold mb-4">
                7-Day Forecast
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.map((day) => (
                    <div
                        key={day.date}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 hover:shadow-xl transition"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">
                                    {new Date(
                                        day.date
                                    ).toLocaleDateString(
                                        "en-US",
                                        {
                                            weekday: "short",
                                        }
                                    )}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {new Date(
                                        day.date
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                            <img
                                src={day.icon}
                                alt="Weather"
                                className="w-16 h-16"
                            />
                        </div>

                        <div className="mt-4 flex justify-between">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Min
                                </p>

                                <p className="text-2xl font-bold">
                                    {day.temp_min}°
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Max
                                </p>

                                <p className="text-2xl font-bold text-orange-500">
                                    {day.temp_max}°
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 space-y-3">

                            <div className="flex items-center gap-3">
                                <FaCloudRain />

                                <span>
                  Rain:{" "}
                                    {
                                        day.precipitation_probability
                                    }
                                    %
                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaCloudRain />

                                <span>
                  Rainfall:{" "}
                                    {day.precipitation_sum} mm
                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaWind />

                                <span>
                  Wind: {day.wind_max} km/h
                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaSun />

                                <span>
                  Sunrise:{" "}
                                    {new Date(
                                        day.sunrise
                                    ).toLocaleTimeString(
                                        [],
                                        {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        }
                                    )}
                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaSun />

                                <span>
                  Sunset:{" "}
                                    {new Date(
                                        day.sunset
                                    ).toLocaleTimeString(
                                        [],
                                        {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        }
                                    )}
                </span>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-500 h-2 rounded-full"
                                    style={{
                                        width: `${day.precipitation_probability}%`,
                                    }}
                                />
                            </div>

                            <p className="text-xs text-gray-500 mt-1">
                                Rain Probability
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default DailyForecastCard
