const axios = require("axios");

exports.handler = async (event) => {
    try {
        const response = await axios.get(
            "https://api.weather-ai.co/v1/hourly",
            {
                params: event.queryStringParameters,
                headers: {
                    Authorization: `Bearer ${process.env.WEATHER_AI_API_KEY}`,
                },
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error("ERROR:", {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
        });
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message,
                status: error.response?.status,
                data: error.response?.data,
            }),
        };
    }
};