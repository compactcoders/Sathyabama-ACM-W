import React from "react";
import { Link } from "react-router-dom";
import events from "../data/events";
import megaEvents from "../data/megaEvents";
import "../styles/EventsPage.css"; // You can use the same CSS or adjust if needed

const EventsPage = () => {
    // Add a type property to distinguish event types
    const allEvents = [
        ...events.map(event => ({ ...event, type: "monthly" })),
        ...megaEvents.map(event => ({ ...event, type: "mega" }))
    ];

    return (
        <div className="events-page">
            <p id="events">All Events</p>
            <div className="events-container">
                {allEvents.map((event) => (
                    <Link
                        to={`/${event.type === "mega" ? "mega-event" : "event"}/${event.id}`}
                        key={`${event.type}-${event.id}`}
                        className="event-link"
                    >
                        <img src={event.brochure} alt={event.name} className="event-image" />
                        <div className="event-info">
                            <p id="e">{event.name}</p>
                            <p id="d">Date: {event.date}</p>
                            <span className={`event-type-badge ${event.type}`}>
                                {event.type === "mega" ? "Mega Event" : "Monthly Event"}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
