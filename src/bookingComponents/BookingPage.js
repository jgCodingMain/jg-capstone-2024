import '../App.css'
import '../Booking.css';

import { submitAPI,fetchAPI } from './api'
import Footer from '../components/Footer';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';








import React, { useReducer, useEffect, useState } from 'react';


const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload; // Update with new available times
        default:
            return state; // Return current state if no action matches
    }
};

// Define initial available times
const initialTimes = ['10:00AM', '11:00AM', '12:00PM'];


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

    const initializeTimes = async () => {
        await fetchAvailableTimes(selectedDate); // Fetch available times for the selected date
    };
    // Use useEffect to initialize available times when the component mounts
    useEffect(() => {
        initializeTimes(); // Call initializeTimes on mount
    }, []); // Empty dependency array means this runs once on mount

   const navigate = useNavigate();

    const submitForm = async (formData) => {
        const response = await submitAPI(formData);
        if (response) {
           navigate('/confirmed-booking');
        }
    };

    return (
        <>
            <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                setDate={setSelectedDate}
                onSubmit={submitForm}
            />
            <Footer />
        </>
    );
}















