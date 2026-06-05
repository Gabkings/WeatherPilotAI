export const calculateTravelScore = (
    temp: number,
    rain: number
) => {
    let score = 100;

    if (temp > 35) score -= 30;
    if (temp < 10) score -= 20;
    if (rain > 70) score -= 40;

    return Math.max(score, 0);
};

export const calculateFarmingScore = (
    rain: number,
    humidity: number
) => {
    return Math.min(
        100,
        Math.round(
            rain * 0.5 +
            humidity * 0.5
        )
    );
};

export const calculateRiskScore = (
    rain: number,
    windGust: number
) => {
    return Math.min(
        100,
        Math.round(
            rain * 0.7 +
            windGust * 0.3
        )
    );
};