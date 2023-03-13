import React from "react";

const EventItem = ({img, name, date, description}) => {
    return (
        <div className="event__item item-event">
            <div className="item-event__img">
                <img src={img} alt="" />
            </div>
            <div className="item-event__info info-item">
                <div className="info-item__label">
                    <div className="info-item__name">{name}</div>
                    <div className="info-item__date">
                        {date}
                    </div>
                </div>
                <div className="info-item__description">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default EventItem;
