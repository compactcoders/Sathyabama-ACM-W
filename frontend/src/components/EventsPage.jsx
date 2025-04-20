// EventsPage.js
import React from "react";
import { Link } from "react-router-dom";
import events from "../data/events";
import "../styles/EventsPage.css";

const EventsPage = () => {
    return (
        <div className="events-page">
            <p id="events">Monthly Events</p>
            <div className="events-container">
                {events.map((event) => (
                    <Link to={`/event/${event.id}`} key={event.id} className="event-link">
                        <img src={event.brochure} alt={event.name} className="event-image" />
                        <div className="event-info">
                            <p id="e">{event.name}</p>
                            <p id="d">Date: {event.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;

