import React, { useState } from 'react';

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
  const [errors, setErrors] = useState({});

  const handleDateChange = async (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate.toISOString().slice(0, 10));

    // Fetch new available times based on the selected date
    const newTimes = fetchAPI(selectedDate); // No need for await since it's local
    console.log(newTimes); // Check the output
    updateTimes(newTimes); // Update the available times in the parent component
};
  const handleSubmit = (event) => {
      event.preventDefault();
      const newErrors = {};

      // Basic validation
      if (!partysize) newErrors.partysize = 'Party size is required';
      if (!firstname) newErrors.firstname = 'First Name is required';
      if (!lastname) newErrors.lastname = 'Last Name is required';
      if (!phone) newErrors.phone = 'Phone is required';
      if (!email) newErrors.email = 'Email is required';

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
          // Form is valid, submit data
          alert('Thank you for your reservation!');
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <h1 className="headCenter">Reserve a Table</h1>
          <div className="formHolder">
              <div className="div1">
                  <label htmlFor="res-date">Choose date</label>
                  <input type="date" value={date} onChange={handleDateChange} />
              </div>

              <div className="div2">
                  <div>
                      <label htmlFor="partysize">Select Party Size</label>
                      <select name="partysize" value={partysize} onChange={(e) => setPartysize(e.target.value)}>
                          <option value="">Select...</option>
                          {[1, 2, 3, 4, 5, 6, 7].map(size => (
                              <option key={size} value={size}>{size}</option>
                          ))}
                      </select>
                      {errors.partysize && <p>{errors.partysize}</p>}
                  </div>
                  <div>
                      <label htmlFor="res-time">Select a Time</label>
                      <select
                          id="res-time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                      >
                          {availableTimes.map((timeOption, index) => (
                              <option key={index} value={timeOption}>{timeOption}</option>
                          ))}
                      </select>
          </div>
        </div>

        <div className="alignCenter">
          <h2>Contact Details</h2>

                <label htmlFor="firstname"> First Name</label>
                <input type="text"
        id="firstname" name="firstname"  value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
          {errors.firstname && <p>{errors.firstname}</p>}

                <label htmlFor="lastname"> Last Name</label>
                <input type="text"
        id="lastname" name="lastname"  value={lastname} onChange={(e) => setLastname(e.target.value)}/>
          {errors.lastname && <p>{errors.lastname}</p>}

                <label htmlFor="phone">Phone or Cell Number</label>
                <input type="text"
        id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          {errors.phone && <p>{errors.phone}</p>}

                <label htmlFor="email">Email</label>
                <input type="text"
        id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <p>{errors.email}</p>}

<div className="specialRequest">
                <label htmlFor="requests"> Special Requests</label>
                <textarea type="textarea"  id="requests" name="requests" value={requests} onChange={(e) => setRequests(e.target.value)}></textarea>
                </div>

            <div>
            <button type="submit" className="submitBtn" aria-label="Confirm Reservation">Book Now</button>
            </div>

</div>
      </div>
    </form>
  );
}

export default BookingForm;