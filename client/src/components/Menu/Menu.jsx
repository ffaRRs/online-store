import React, { useState } from "react";
import "./Menu.scss";
import { observer } from "mobx-react-lite";
import DropMenu from "../DropMenu/DropMenu";
import { useContext } from "react";
import { Context } from "../..";
import dropMenuStore from "../../store/dropMenuStore";

const Menu = () => {
    let [openDropMenu, setOpenDropMenu] = useState(false);
    const {dropMenuStore} = useContext(Context);

    return (
        <>
            <DropMenu />
            <div className="menu">
                <div className="container">
                    <div className="menu__row">
                        <div
                            className={
                                !dropMenuStore.openDropMenu
                                    ? "menu__catalog catalog-menu"
                                    : "menu__catalog catalog-menu active"
                            }
                            onClick={() => dropMenuStore.changeOpenDropMenu}
                        >
                            <div className="catalog-menu__burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="catalog-menu__label">Каталог</div>
                        </div>
                        <ul className="menu__items items-menu">
                            <li className="items-menu__item">Wharhammer</li>
                            <li className="items-menu__item">
                                Magic:the Cathering
                            </li>
                            <li className="items-menu__item">Мероприятия</li>
                            <li className="items-menu__item">О центре</li>
                            <li className="items-menu__item">Контакты</li>
                        </ul>
                        <div className="menu__social social-menu">
                            <img
                                className="social-menu__inst"
                                src="img/header/instagram.svg"
                                alt="inst"
                            />
                            <img
                                className="social-menu__vk"
                                src="img/header/vk.svg"
                                alt="vk"
                            />
                            <img
                                className="social-menu__fb"
                                src="img/header/facebook.svg"
                                alt="fb"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default observer(Menu);
