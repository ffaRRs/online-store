import React from "react";
import moreInfo from "../../data/moreInfo";
import './MoreInfo.scss'
import MoreInfoItem from "./MoreInfoItem/MoreInfoItem";

const MoreInfo = () => {
    return (
        <div className="more">
            <div className="more__title">Больше интересной информации</div>
            <div className="more__content">
                <div className="more__row">
                    {moreInfo.map(more => {
                        return(
                            <MoreInfoItem
                                img={more.img}
                                label={more.label}
                                text={more.text}
                            />
                        )
                    })}
                </div>
                <button className="btn-more">Узнать больше</button>
            </div>
        </div>
    );
};

export default MoreInfo;
