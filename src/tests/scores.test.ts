import {
    calculateTravelScore,
    calculateFarmingScore,
    calculateRiskScore,
} from "../utils/scores";

describe("Weather Scores", () => {
    test("calculates travel score", () => {
        const score =
            calculateTravelScore(25, 20);

        expect(score).toBeGreaterThan(0);
    });

    test("calculates farming score", () => {
        const score =
            calculateFarmingScore(80, 70);

        expect(score).toBeGreaterThan(70);
    });

    test("calculates risk score", () => {
        const score =
            calculateRiskScore(90, 50);

        expect(score).toBeGreaterThan(60);
    });
});