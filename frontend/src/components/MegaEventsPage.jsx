import React from "react";
import { Link } from "react-router-dom";
import megaEvents from "../data/megaEvents";
import "../styles/MegaEventsPage.css"

const MegaEventsPage = () => {
    return (
        <div className="mega-events-page">
            <p id = "Mevents">Mega Events</p>
            <div className="events-container">
                {megaEvents.map((event) => (
                    <Link to={`/mega-event/${event.id}`} key={event.id} className="event-link">
                        <div className="event-card">
                            <img src={event.brochure} alt={event.name} className="event-image"/>
                        </div>
                        <div className="event-info">
                            <p id="me">{event.name}</p>
                            <p id="da">Date: {event.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MegaEventsPage;
