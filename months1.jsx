import React from "react";
import "./timeline.css"; // Add any necessary CSS for styling

const Timeline = ({ events }) => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-point ${index % 2 === 0 ? "left" : "right"}`}
            onClick={() => handleScroll(event.id)}
          >
            <div className="timeline-label">{event.title}</div>
          </div>
        ))}
      </div>

      <div className="timeline-details">
        {events.map((event) => (
          <div id={event.id} key={event.id} className="timeline-section">
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
