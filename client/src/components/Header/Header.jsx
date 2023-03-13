import React from "react";
import "./Header.scss";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "../..";


const Header = () => {
    const {dropMenuStore} = useContext(Context);

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <div
                        className={
                            !dropMenuStore.openDropMenu
                                ? "catalog-menu"
                                : "catalog-menu active"
                        }
                        // onClick={() => dropMenuStore.changeOpenDropMenu}
                    >
                        <div className="catalog-menu__burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="header__logo">
                        <img src="img/header/logo.png" alt="LOGO" />
                    </div>
                    <div className="header__input input-header">
                        <input
                            className="input-header__search"
                            type="text"
                            placeholder="Найти игру"
                        />
                        <div className="input-header__img">
                            <img src="img/header/search.svg" alt="search" />
                        </div>
                    </div>
                    <div className="header__phone phone-header">
                        <div className="phone-header__img">
                            <img src="img/header/phone.svg" alt="phone" />
                        </div>
                        <a
                            href="tel:84959111011"
                            className="phone-header__number"
                        >
                            +7 (495) 911-10-11
                        </a>
                    </div>
                    <div className="header__info info-header">
                        <img
                            src="img/header/user.svg"
                            className="info-header__profile"
                            alt="profile"
                        />
                        <div className="info-header__cart cart-info">
                            <img
                                src="img/header/cart.svg"
                                className="cart-info__img"
                                alt="cart"
                            />
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default  observer(Header);
