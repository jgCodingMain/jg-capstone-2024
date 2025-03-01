

import BookingPage from '../src/bookingComponents/BookingPage';

import { fetchAPI } from './bookingComponents/api';

///jest.mock('./bookingComponents/api');

//test('fetches and displays available times on mount', async () => {
   // const mockTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
   // fetchAPI.mockResolvedValue(mockTimes);

    //render(<BookingPage />);

    // You can add assertions here to check if the available times are displayed correctly
    // For example, you might check if the times are rendered in the document
//});

// form.test.js
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BookingForm from './bookingComponents/BookingForm';



describe("BookingForm", () => {
  it("should have the required attribute when required is true", () => {
    const { getByRole } = render(<BookingForm required={true} />);
    const inputElement = getByRole("textbox");
    expect(inputElement).toBeRequired();
  });

  it("should not have the required attribute when required is false", () => {
    const { getByRole } = render(<BookingForm required={false} />);
    const inputElement = getByRole("textbox");
    expect(inputElement).not.toBeRequired();
  });
});






