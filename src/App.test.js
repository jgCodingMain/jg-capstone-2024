




import { availableTimes } from './BookingPage';
import { fetchAPI } from './bookingComponents/api';




// Assuming you're using a testing framework like Jest

jest.mock('./bookingComponents/api', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['10:00 AM', '11:00 AM', '12:00 PM'])),
}));

test('initializeTimes updates booking times correctly', async () => {
  const bookingTimes = await initializeTimes();
  expect(bookingTimes).toEqual(['10:00 AM', '11:00 AM', '12:00 PM']);
});











