import React, { useContext, useState } from "react";
import "./DropMenuMedia.scss";
import categories from "../../../data/categories";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import MadiaCategory from "./MadiaCategory/MadiaCategory";

const DropMenuMedia = () => {
    const { dropMenuStore } = useContext(Context);
    // console.log(dropMenuStore.openDropMenu);
    const [flag, setFlag] = useState(false);

    const menuInfo = ["Мероприятия", "Блог", "О Центре", "Контакты"];

    let hui = () =>{
        console.log(flag);
        setFlag(!flag)
    }

    return (
        <div className="menu-media">
            <div
                className={
                    !dropMenuStore.openDropMenu
                        ? "menu-media"
                        : "menu-media active"
                }
            >
                <div className="menu-media__column">
                    <ul className="menu-media__categories media-categories">
                        <li className="media-categories__item">
                            <div className="media-categories__title">
                                Все категории
                            </div>
                        </li>
                        {categories.map((category) => {
                            
                            return (
                                <MadiaCategory category={category}/>
                            );
                        })}
                    </ul>
                </div>
                <div className="menu-media__column">
                    <ul className="menu-media__categories media-categories">
                        {menuInfo.map((info) => {
                            return (
                                <li className="media-categories__item">
                                    <div className="media-categories__title">
                                        {info}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default observer(DropMenuMedia);
