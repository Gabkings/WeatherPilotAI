import {
    render,
    screen,
} from "@testing-library/react";

import TravelScoreCard from "../components/TravelScoreCard";

describe(
    "TravelScoreCard",
    () => {
        test(
            "renders score",
            () => {
                render(
                    <TravelScoreCard
                        score={85}
                    />
                );

                expect(
                    screen.getByText("85")
                ).toBeInTheDocument();
            }
        );

        test(
            "shows excellent status",
            () => {
                render(
                    <TravelScoreCard
                        score={90}
                    />
                );

                expect(
                    screen.getByText(
                        /Excellent/
                    )
                ).toBeInTheDocument();
            }
        );
    }
);