
import { render, screen } from '@testing-library/react';
import BookingPage from '../src/bookingComponents/BookingPage';
import { fetchAPI } from './bookingComponents/api';

jest.mock('./bookingComponents/api');

test('fetches and displays available times on mount', async () => {
    const mockTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
    fetchAPI.mockResolvedValue(mockTimes);

    render(<BookingPage />);

    // You can add assertions here to check if the available times are displayed correctly
    // For example, you might check if the times are rendered in the document
});




