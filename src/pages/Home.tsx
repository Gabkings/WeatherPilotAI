import SearchBar from "../components/SearchBar.tsx";
import SearchHistory from "../components/SearchHistory.tsx";
import CurrentWeatherCard from "../components/CurrentWeatherCard.tsx";
import TravelScoreCard from "../components/TravelScoreCard.tsx";
import FarmingScoreCard from "../components/FarmingScoreCard.tsx";
import RiskScoreCard from "../components/RiskScoreCard.tsx";
import WeatherInsights from "../components/WeatherInsights.tsx";
import HourlyChart from "../components/HourlyChart.tsx";
import DailyForecastCard from "../components/DailyForecastCard.tsx";
import {useEffect, useMemo, useState} from "react";
import type {DailyForecast, HourlyForecast, WeatherResponse} from "../types/weather.ts";
import {getCoordinates} from "../services/geocodingService.ts";
import {getCurrentWeather, getDailyForecast, getHourlyForecast} from "../api/weatherApi.ts";
import {calculateFarmingScore, calculateRiskScore, calculateTravelScore} from "../utils/scores.ts";
import {generateInsight} from "../utils/insights.ts";

const Home = () => {
    const [city, setCity] = useState("Nairobi");

    console.log("Current city:", city);
    const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(null);

    const [hourlyForecast, setHourlyForecast] = useState<HourlyForecast[]>([]);

    const [dailyForecast, setDailyForecast] = useState<DailyForecast[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<string>("");

    const [history, setHistory] = useState<string[]>([]);

    const searchWeather = async (location: string) => {
        try {
            setLoading(true);
            setError("");

            const coordinates = await getCoordinates(location);

            const params = {
                lat: coordinates.lat,
                lon: coordinates.lon,
                days: 7,
                ai: true,
                units: "metric" as const,
                lang: "en",
            };

            const [currentResponse, hourlyResponse, dailyResponse] =
                await Promise.all([
                    getCurrentWeather(params),
                    getHourlyForecast(params),
                    getDailyForecast(params),
                ]);

            setCurrentWeather(currentResponse);

            setHourlyForecast(hourlyResponse.hourly || []);

            setDailyForecast(dailyResponse.daily || []);

            saveSearchHistory(location);

            setCity(location);
        } catch (err) {
            console.error(err);

            setError("Failed to load weather data.");
        } finally {
            setLoading(false);
        }
    };

    const saveSearchHistory = (location: string) => {
        const updated = [
            location,
            ...history.filter((item) => item !== location),
        ].slice(0, 5);

        setHistory(updated);

        localStorage.setItem("search-history", JSON.stringify(updated));
    };

    useEffect(() => {
        const storedHistory = localStorage.getItem("search-history");

        function fetchHIstory() {
            if (storedHistory) {
                setHistory(JSON.parse(storedHistory));
            }
        }

        async function fetchWeather() {
            await searchWeather("Nairobi");
        }

        fetchHIstory();
        fetchWeather();
    }, []);

    const chartData = useMemo(() => {
        return hourlyForecast.slice(0, 24).map((hour) => ({
            hour: new Date(hour.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            temperature: hour.temperature,
        }));
    }, [hourlyForecast]);

    const scores = useMemo(() => {
        if (!hourlyForecast.length) {
            return {
                travelScore: 0,
                farmingScore: 0,
                riskScore: 0,
            };
        }

        const currentHour = hourlyForecast[0];

        return {
            travelScore: calculateTravelScore(
                currentHour.temperature,
                currentHour.precipitation_probability,
            ),

            farmingScore: calculateFarmingScore(
                currentHour.precipitation_probability,
                currentHour.humidity,
            ),

            riskScore: calculateRiskScore(
                currentHour.precipitation_probability,
                currentHour.wind_gust,
            ),
        };
    }, [hourlyForecast]);

    const insight = useMemo(() => {
        if (!hourlyForecast.length) return "";

        return generateInsight(hourlyForecast);
    }, [hourlyForecast]);



    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            <div className="container mx-auto px-4 py-8">
                {/* header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">WeatherPilot AI</h1>

                    <p className="text-gray-500 mt-2">
                        AI-Powered Weather Intelligence Platform
                    </p>
                </div>
                {/* Search */}

                <div className="mb-6">
                    <SearchBar onSearch={searchWeather}  />
                </div>

                {/* Search history */}

                <div className="mb-6">
                    <SearchHistory history={history} onSelect={searchWeather} />
                </div>

                {/* Loading */}
                {loading && (
                    <div className="bg-white rounded-xl p-8 shadow text-center">
                        Loading weather data...
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-xl mb-6">
                        {error}
                    </div>
                )}

                {!loading && currentWeather && (
                    <>
                        {/* Current Weather */}

                        <div className="mb-6">
                            <CurrentWeatherCard current={currentWeather?.current}/>
                        </div>

                        {/* Scores */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <TravelScoreCard score={scores.travelScore} />

                            <FarmingScoreCard score={scores.farmingScore} />

                            <RiskScoreCard score={scores.riskScore} />
                        </div>

                        {/* Insight */}

                        <div className="mb-6">
                            <WeatherInsights insight={insight} />
                        </div>

                        {/* Hourly Forecast Chart */}

                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                24-Hour Temperature Trend
                            </h2>

                            <HourlyChart data={chartData} />
                        </div>

                        {/* Daily Forecast */}

                        <div className="mb-6">
                            <DailyForecastCard data={dailyForecast} />
                        </div>

                        {/* AI Summary */}

                        {currentWeather.ai_summary && (
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow">
                                <h2 className="text-xl font-bold mb-3">AI Weather Summary</h2>

                                <p>{currentWeather.ai_summary}</p>
                            </div>
                        )}
                    </>
                )}

            </div>
        </div>
    )
}
export default Home
