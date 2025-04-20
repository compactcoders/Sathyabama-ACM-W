import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/events";
import "../styles/EventDetailPage.css";

const EventDetailPage = () => {
    const { id } = useParams();
    const event = events.find((e) => e.id === parseInt(id));

    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <div className="event-detail-page">
            <p id="semi-title">Monthly Event</p>
            <p id="title">{event.name}</p>
            <p id="event-date">{event.date}</p>
            <div className="event-details">
                <div className="brochure-container">
                    <img
                        src={event.brochureImage}
                        alt={`${event.name} brochure`}
                        style={{ width: "420px", height: "400px", objectFit: "fill",marginTop: "100px",borderRadius:"3%" }}
                        className="brochure-image"
                    />
                </div>
                <div className="description-container">
                    <p className="description">{event.description1}</p>
                    <br></br>
                    <br></br>
                    <p className="description">{event.description2}</p>
                </div>
            </div>
            <div className="img-container">
                {event.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${event.name} ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventDetailPage;
