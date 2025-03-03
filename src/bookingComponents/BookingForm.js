import React, { useState } from 'react';
import ConfirmedBooking from './ConfirmedBooking';
import { submitAPI,fetchAPI } from './api'

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('');
  const [partysize, setPartysize] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requests, setRequests] = useState('');
  const [ newErrors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission
  const [formData, setFormData] = useState({
    date: '',
    partysize :'',
    time: '',
    firstname : '',
    lastname: '',
    phone: '',
    email: '',
    requests:''
    // Add other fields as necessary
});
const handleDateChange = async (event) => {
  const selectedDate = new Date(event.target.value);
  setDate(selectedDate.toISOString().slice(0, 10)); // Update the local date state

  // Fetch new available times based on the selected date
  const newTimes = await fetchAPI(selectedDate); // Ensure fetchAPI is defined and returns available times
  updateTimes(newTimes); // Update the available times in the parent component

  // Update formData with the selected date
  setFormData({
      ...formData,
      date: selectedDate.toISOString().slice(0, 10), // Ensure the date is stored in the correct format
  });
};

// Handle input changes
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};
const handleSubmit = (event) => {
  event.preventDefault();
  const newErrors = {};

  // Gather form data from state
  const { partysize, time, firstname, lastname, phone, email, requests } = formData;

  // Basic validation
  if (!partysize) {
      newErrors.partysize = 'Party size is required';
  }
  if (!time) {
    newErrors.time = 'Time is required';
}
  if (!firstname) {
      newErrors.firstname = 'First Name is required';
  } else if (!/^[A-Za-z]+$/.test(firstname)) { // Check if firstname contains only letters
      newErrors.firstname = 'First Name must contain only letters';
  }
  if (!lastname) {
      newErrors.lastname = 'Last Name is required';
  } else if (!/^[A-Za-z]+$/.test(lastname)) { // Check if lastname contains only letters
      newErrors.lastname = 'Last Name must contain only letters';
  }

  // Phone number validation (allowing dashes)
  const cleanedPhone = phone.replace(/-/g, ''); // Remove dashes
  if (!phone) {
      newErrors.phone = 'Phone is required';
  } else if (cleanedPhone.length !== 10) { // Check if cleaned phone has 10 digits
      newErrors.phone = 'Phone number must be 10 digits';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check
  if (!email) {
      newErrors.email = 'Email is required';
  } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email is not valid';
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data
      setIsSubmitted(true); // Set submission state to true
  }
};
  // Render the ConfirmedBooking component if the form is submitted
  if (isSubmitted) {
      return <ConfirmedBooking formData={formData} />;
  }

  return (
      <form onSubmit={handleSubmit}>
          <h1 className="headCenter">Reserve a Table</h1>
          <div className="formHolder">
              <div className="div1">
                  <label htmlFor="res-date">Choose date</label>
                  <input
                name="date"
                type="date"
                id="res-date"
                value={date} // Bind the input value to the date state
                onChange={handleDateChange} // Use the handleDateChange function

            />
              </div>

              <div className="div2">
                  <div>
                      <label htmlFor="partysize">Select Party Size</label>
                      <select name="partysize"

                    value={formData.partysize}
                    onChange={handleChange}>
                          <option value="">Select...</option>
                          {[2, 3, 4, 5, 6, 7].map(size => (
                              <option key={size} value={size}>{size}</option>
                          ))}
                      </select>
                      { newErrors.partysize && <p>{ newErrors.partysize}</p>}
                  </div>
                  <div>
                      <label htmlFor="res-time">Select a Time</label>
                      <select
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
            >
                {availableTimes.length > 0 ? (
                    availableTimes.map((timeOption, index) => (
                        <option key={index} value={timeOption}>{timeOption}</option>
                    ))
                ) : (
                    <option value="">No available times</option> // Handle case when no times are available
                )}

            </select>
            { newErrors.time && <p>{ newErrors.time}</p>}
          </div>
        </div>

        <div className="alignCenter">
          <h2>Contact Details</h2>

                <label htmlFor="firstname"> First Name</label>
                <input
                    type="text"      required
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}


                />
          { newErrors.firstname && <p>{ newErrors.firstname}</p>}

                <label   htmlFor="lastname"> Last Name</label>
                <input required type="text"
        id="lastname"    name="lastname"
        value={formData.lastname}
        onChange={handleChange}
        />
          { newErrors.lastname && <p>{ newErrors.lastname}</p>}

                <label htmlFor="phone">Phone or Cell Number</label>
                <input type="text"
        id="phone"   name="phone"      required
        value={formData.phone}
        onChange={handleChange}/>
          { newErrors.phone && <p>{ newErrors.phone}</p>}

                <label htmlFor="email">Email</label>
                <input type="email"
        id="email"    name="email"
        value={formData.email}
        onChange={handleChange}
        required/>
          { newErrors.email && <p>{ newErrors.email}</p>}

<div className="specialRequest">
                <label htmlFor="requests"> Special Requests</label>
                <textarea type="textarea"  id="requests"    name="requests"
                    value={formData.requests}
                    onChange={handleChange} ></textarea>
                </div>

            <div>
            <button type="submit" className="submitBtn" aria-label="Confirm Reservation"  >Book Now</button>
            </div>

</div>
      </div>
    </form>
  );
}

export default BookingForm;