import React, { useState } from "react";
import magicTheGatheting from "../../../../data/dropMenu/subCategory/magicTheGatheting";


const MadiaCategory = ({category}) => {
    const [flag, setFlag] = useState(false);
    return (
        <li className="media-categories__item" onClick={() => setFlag(!flag)}>
            <div className="media-categories__label">
                <div className="media-categories__title">{category}</div>
                <div className="media-categories__img"></div>
            </div>
            <div className={!flag ? "subitem-media" : "subitem-media active"}>
                {magicTheGatheting.map((subitem) => {
                    return (
                        <div className="subitem-media__title">{subitem}</div>
                    );
                })}
            </div>
        </li>
    );
};

export default MadiaCategory;
