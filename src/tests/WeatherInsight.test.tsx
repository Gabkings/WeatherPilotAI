import {
    render,
    screen,
} from "@testing-library/react";
import WeatherInsights from "../components/WeatherInsights.tsx";

describe(
    "WeatherInsight",
    () => {
        test(
            "renders insight",
            () => {
                render(
                    <WeatherInsights
                        insight="Heavy rainfall expected"
                    />
                );

                expect(
                    screen.getByText(
                        "Heavy rainfall expected"
                    )
                ).toBeInTheDocument();
            }
        );
    }
);