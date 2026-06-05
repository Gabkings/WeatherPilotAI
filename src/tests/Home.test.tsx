import {
    render,
    screen,
} from "@testing-library/react";

import Home from "../pages/Home";

describe(
    "Home Component",
    () => {
        test(
            "renders title",
            () => {
                render(
                    <Home />
                );

                expect(
                    screen.getByText(
                        /WeatherPilot AI/
                    )
                ).toBeInTheDocument();
            }
        );
    }
);