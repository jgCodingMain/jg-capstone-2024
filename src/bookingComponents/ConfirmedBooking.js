import '../App.css'
import '../Booking.css';

import { submitAPI,fetchAPI } from './api'
import Footer from '../components/Footer';
import BookingForm from './BookingForm';







import React, { useReducer, useEffect, useState } from 'react';


// Reducer function to manage available times
const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload; // Update with new available times
        default:
            return state; // Return current state if no action matches
    }
};

// Define initial available times
const initialTimes = [
    '10:00AM', '11:00AM', '12:00PM'
];

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialTimes);
    const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date

    // Function to fetch available times from the API
    const fetchAvailableTimes = async (date) => {
        const times = await fetchAPI(date); // Call the fetchAPI function
        updateTimes(times); // Update the state with the fetched times
    };

    const updateTimes = (newTimes) => {
        dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
    };

    // Use useEffect to fetch available times for the selected date
    useEffect(() => {
        fetchAvailableTimes(selectedDate); // Fetch available times for the selected date
    }, [selectedDate]); // Dependency array includes selectedDate

    return (
        <>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                setDate={setSelectedDate} // Pass setSelectedDate to BookingForm
            />
            <Footer />
        </>
    );
}
