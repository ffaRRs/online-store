import React from "react";
import events from "../../data/events";
// import CategoryCatalog from "../Catalog/CategoryCatalog/CategoryCatalog";
import "./Event.scss";
import EventItem from "./EventItem/EventItem";

const Event = () => {
    return (
        <div className="event">
            <div className="event__title">Ближайшие мероприятия</div>
            <div className="event__content">
                <div className="event__row">
                    {events.map(event => {
                        return(
                            <EventItem
                                img={event.img}
                                name={event.name}
                                date={event.date}
                                description={event.description}
                            />
                        )
                    })}
                    
                </div>
                <button className="btn-event">Показать еще</button>
            </div>
        </div>
    );
};

export default Event;
