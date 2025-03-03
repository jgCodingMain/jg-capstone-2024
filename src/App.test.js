






import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './homepageComponents/Hero';

describe("Button text and navigation test", () => {
    it("should display the correct text inside the button and navigate to the correct page onClick", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Hero />
                <Route path="/booking">
                    <div>Booking Page</div> {/* Mock the booking page */}
                </Route>
            </MemoryRouter>
        );

        // Query the button element
        const button = screen.getByRole('button');

        // Check if the button contains the correct text
        expect(button).toHaveTextContent("Reserve a Table");

        // Simulate a click on the button
        button.click();

        // Check if the correct page is displayed
        expect(screen.getByText("Booking Page")).toBeInTheDocument();
    });
});