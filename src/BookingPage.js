import './App.css';
import './Booking.css';


import Footer from './Footer';
import BookingForm from "./BookingForm";
import { useReducer } from "react";




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
    '10:00AM', '11:00AM','12:00PM'
  ];



export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initialTimes);

  const updateTimes = (newTimes) => {
      dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
  };

  return (
      <>
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
          <Footer />
      </>
  );
}