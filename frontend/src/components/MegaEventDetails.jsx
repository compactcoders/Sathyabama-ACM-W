import React from "react";
import { useParams } from "react-router-dom";
import "../styles/MegaEventDetails.css";
import megaEvents from "../data/megaEvents";

const MegaEventDetails = () => {
    const { id } = useParams();
    const event = megaEvents.find((e) => e.id === parseInt(id));

    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <div className="megaEvent-detail-page">
            <p id="semi-title">Mega Event</p>
            <p id="title">{event.name}</p>
            <p id="event-date">{event.date}</p>
            <div className="brochure-overview-container">
                <div className="brochure-overview-image">
                    <img
                        src={event.brochure}
                        alt={`${event.name} Brochure`}
                        style={{
                            width: "350px",
                            height: "400px",
                            objectFit: "fill",
                            marginTop: "30px",
                            borderRadius: "3%",
                            border: "1px solid black",
                        }}
                    />
                </div>
                <div className="event-overview-container">
                    <p id="event-overview">{event.overview}</p>
                </div>
            </div>

            {Object.keys(event.dayPhotos).map((dayKey, index) => (
                <div key={index} className="day-section">
                    <div className="brochure-description-container">
                        <div className="brochure-container">
                            <p className="day">{event[`day${index + 1}`]}</p>
                            <img
                                src={event.brochureImages[index]}
                                alt={`Brochure for ${event[`day${index + 1}`]}`}
                                className="brochure-image"
                            />
                        </div>
                        <div className="description-container">
                            <p className="desc">{event[`description${index + 1}`]}</p>
                        </div>
                    </div>
                    <p id="glimpse">Glimpses from the event</p>
                    <div className="photos-container">
                        {event.dayPhotos[dayKey].map((photo, photoIndex) => (
                            <img
                                key={photoIndex}
                                src={photo}
                                alt={`${event.name} - ${dayKey} photo ${photoIndex + 1}`}
                                className="day-photo"
                            />
                        ))}
                    </div>
                </div>
            ))}
            <p id="conc">{event.conclusion}</p>
        </div>
    );
};

export default MegaEventDetails;
