import { describe, test, expect, vi } from "vitest";
import api from '../api/axios'
import {getCurrentWeather, getDailyForecast, getHourlyForecast} from "../api/weatherApi.ts";

vi.mock("../api/axios", () => ({
    default: {
        get: vi.fn(),
    },
}));

describe("Weather Service", () => {
    test("fetches current weather", async () => {
        const mockedGet = vi.mocked(api.get);

        mockedGet.mockResolvedValue({
            data: {
                temperature: 20,
            },
        });

        const result = await getCurrentWeather({
            lat: -1.29,
            lon: 36.82,
        });

        expect(result.temperature).toBe(20);
    });

    test("fetches daily weather", async () => {
        const mockedGet = vi.mocked(api.get);

        mockedGet.mockResolvedValue({
            data: {
                temperature: 30,
            },
        });

        const result = await getDailyForecast({
            lat: -1.29,
            lon: 36.82,
        });

        expect(result.temperature).toBe(30);
    });

    test("fetches hourly weather", async () => {
        const mockedGet = vi.mocked(api.get);

        mockedGet.mockResolvedValue({
            data: {
                temperature: 30,
            },
        });

        const result = await getHourlyForecast({
            lat: -1.29,
            lon: 36.82,
        });

        expect(result.temperature).toBe(30);
    });
});