import {
    render,
    screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import SearchHistory from "../components/SearchHistory";

describe(
    "SearchHistory",
    () => {
        test(
            "renders history items",
            () => {
                render(
                    <SearchHistory
                        history={[
                            "Nairobi",
                            "Mombasa",
                        ]}
                        onSelect={
                            vi.fn()
                        }
                    />
                );

                expect(
                    screen.getByText(
                        "Nairobi"
                    )
                ).toBeInTheDocument();

                expect(
                    screen.getByText(
                        "Mombasa"
                    )
                ).toBeInTheDocument();
            }
        );

        test(
            "calls onSelect",
            async () => {
                const onSelect =
                    vi.fn();

                render(
                    <SearchHistory
                        history={[
                            "Nairobi",
                        ]}
                        onSelect={
                            onSelect
                        }
                    />
                );

                await userEvent.click(
                    screen.getByText(
                        "Nairobi"
                    )
                );

                expect(
                    onSelect
                ).toHaveBeenCalledWith(
                    "Nairobi"
                );
            }
        );
    }
);