import React from "react";

const MoreInfoItem = ({img, label, text}) => {
    return (
        <div className="more__item item-more">
            <div className="item-more__img">
                <img src={img} alt="" />
            </div>
            <div className="item-more__info">
                <div className="item-more__label">
                    {label}
                </div>
                <div className="item-more__text">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default MoreInfoItem;
