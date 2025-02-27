
const seededRandom = function (seed) {
    var m = 2 ** 35 - 31; // Modulus for random number generation
    var a = 185852; // Multiplier for the random number generator
    var s = seed % m; // Seed initialization
    return function () {
        return (s = s * a % m) / m; // Generate a random number between 0 and 1
    };
};

const initialTimes = ['10:00AM', '11:00AM', '12:00PM']; // Default available times

const fetchAPI = function(date) {
    // If the date is the initial load date, return initial times
    if (date.toDateString() === new Date().toDateString()) {
        return initialTimes; // Return initial times on first load
    }

    let result = [];
    let random = seededRandom(date.getDate()); // Create a seeded random function based on the date

    // Generate available times between 5 PM (17:00) and 11 PM (23:00)
    for (let i = 17; i <= 23; i++) {
        // Ensure that we attempt to add times consistently
        if (random() < 0.5) {
            result.push(i + ':00'); // Add hour time if random condition is met
        }
        if (random() < 0.5) {
            result.push(i + ':30'); // Add half-hour time if random condition is met
        }
    }

    // If no times were generated, fallback to a default set of times
    if (result.length === 0) {
        result = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'];
    }

    return result; // Return the generated available times
};

const submitAPI = function(formData) {
    // Simulate form submission
    return true; // Return true to indicate successful submission
};
export const updateTimes = (selectedDate) => {
    // function implementation
};

export { fetchAPI, submitAPI };
