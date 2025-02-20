




import { availableTimes } from './BookingPage';


test('availableTimes returns the correct initial value', () => {
    const expectedValue = [ '10:00AM', '11:00AM','12:00PM'];
    const result = availableTimes();
    expect(result).toEqual(expectedValue);
});










