import React, { useState } from "react";
import "./InteractiveCalendar.css";

const events = [
  { date: "2025-10-15", title: "Meeting", description: "Team discussion" },
  { date: "2025-10-20", title: "Doctor Visit", description: "Health checkup" },
  { date: "2025-10-20", title: "Study Session", description: "React Revision" },
];

function InteractiveCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthName = today.toLocaleString("default", { month: "long" });
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleDateClick = (day) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(formattedDate);
  };

  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <div className="calendar-container">
      <h2>
        {monthName} {year}
      </h2>

      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

          return (
            <div
              key={day}
              onClick={() => handleDateClick(day)}
              className={`calendar-day ${selectedDate === formattedDate ? "selected" : ""}`}
            >
              {day}
            </div>
          );
        })}
      </div>

      <h3>Events on {selectedDate || "Select a Date"}</h3>
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <div key={index} className="event-card">
            <b>{event.title}</b>
            <p>{event.description}</p>
          </div>
        ))
      ) : (
        selectedDate && <p>No events for this date.</p>
      )}
    </div>
  );
}

export default InteractiveCalendar;