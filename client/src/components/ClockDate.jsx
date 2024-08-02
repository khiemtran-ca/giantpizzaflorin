import React, { useState, useEffect } from 'react';

// Show the current time
const ClockDate = () => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  }
  useEffect(() => {
    setInterval(() => tick(), 1000)
  });

  return (
    <section id="clockDate">
      <div className="open text-center mt-2 mb-4">
        <h1>Open <br /> 11:00 AM to 11:00 PM </h1>
        <h1>Monday - Sunday</h1>
      </div>
      <div id="displayClockDate">
        <h2 className="clock text-center">{time.toLocaleTimeString()}</h2>
        <h2 className="showDate text-center">{date.toDateString()}</h2>
      </div>
    </section>
  )
}

export default ClockDate;