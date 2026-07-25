import {
    FaWind,
    FaCompass,
    FaClock,
} from "react-icons/fa";
import { weatherConditions, type CurrentWeather } from "../types/weather";

interface Props {
    current: CurrentWeather;
}


const CurrentWeatherCard = ({current}: Props) => {
    const formatWindDirection = (
        degrees: number
    ) => {
        const directions = [
            "N",
            "NE",
            "E",
            "SE",
            "S",
            "SW",
            "W",
            "NW",
        ];

        return directions[
        Math.round(degrees / 45) % 8
            ];
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h1 className="text-center text-lg font-bold">Current Weather</h1>
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}

                <div>
                    <p className="text-sm text-gray-500">
                        Current Temperature
                    </p>

                    <h1 className="text-6xl font-bold mt-2">
                        {current?.temperature} °C
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Condition Code:{" "}
                        {weatherConditions[
                            current.condition_code
                            ] ?? "Unknown"}
                    </p>
                </div>

                {/* Weather Icon */}

                <img
                    src={current.icon}
                    alt="Weather"
                    className="w-32 h-32"
                />
            </div>

            {/* Weather Details */}

            <div className="grid md:grid-cols-3 gap-4 mt-6">

                <div className="bg-slate-50 dark:bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center gap-2">
                        <FaWind />

                        <span className="text-sm font-medium">
              Wind Speed
            </span>
                    </div>

                    <p className="text-xl font-bold mt-2">
                        {current.wind_speed} km/h
                    </p>
                </div>

                <div className="bg-slate-50 dark:bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center gap-2">
                        <FaCompass />

                        <span className="text-sm font-medium">
              Direction
            </span>
                    </div>

                    <p className="text-xl font-bold mt-2">
                        {formatWindDirection(
                            current.wind_direction
                        )}
                    </p>

                    <p className="text-xs text-gray-500">
                        {current.wind_direction}°
                    </p>
                </div>

                <div className="bg-slate-50 dark:bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center gap-2">
                        <FaClock />

                        <span className="text-sm font-medium">
              Updated
            </span>
                    </div>

                    <p className="text-sm font-semibold mt-2">
                        {new Date(
                            current.time
                        ).toLocaleString()}
                    </p>
                </div>

            </div>
        </div>
    );
}
export default CurrentWeatherCard
