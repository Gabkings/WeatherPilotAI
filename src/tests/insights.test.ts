import { generateInsight } from "../utils/insights";
import {createHourlyForecast} from "../test-utils/weatherFactory.ts";

describe("Weather Insights", () => {
    test("returns rainfall warning", () => {
        const result = generateInsight([
            createHourlyForecast({
                precipitation_probability: 95,
            }),
        ]);

        expect(result).toContain("Heavy rainfall");
    });

    test("returns stable weather", () => {
        const result =
            generateInsight([
                createHourlyForecast({
                    precipitation_probability: 20,
                }),
            ]);

        expect(result).toContain(
            "stable"
        );
    });


    test("returns moderate rainfall expected", () => {
        const result =
            generateInsight([
                createHourlyForecast({
                    precipitation_probability: 65,
                }),
            ]);

        expect(result).toContain(
            "Moderate rainfall expected"
        );
    });
});