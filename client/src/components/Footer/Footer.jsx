import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__line">
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__main main-footer">
                            <div className="main-footer__img">
                                <img src="./img/footer/1.png" alt="" />
                            </div>
                            <div className="main-footer__adress">
                                г. Москва ст.м. Таганская Малый Дровяной
                                переулок 6
                            </div>
                        </div>
                        <div className="footer__menu menu-footer">
                            <div className="menu-footer__catalog catalog-menu">
                                <div className="catalog-menu__title">
                                    Каталог
                                </div>
                                <div className="catalog-menu__items">
                                    <div className="catalog-menu__item">
                                        Warhammer 40000
                                    </div>
                                    <div className="catalog-menu__item">
                                        Настольные игры
                                    </div>
                                    <div className="catalog-menu__item">
                                        Magic: the Gathering
                                    </div>
                                    <div className="catalog-menu__item">
                                        Аксессуары для игр
                                    </div>
                                    <div className="catalog-menu__item">
                                        Краски
                                    </div>
                                    <div className="catalog-menu__item">
                                        Аксессуары для моделизма
                                    </div>
                                </div>
                            </div>
                            <div className="menu-footer__column column-menu">
                                <div className="column-menu__item">
                                    Правила клуба
                                </div>
                                <div className="column-menu__item">
                                    Мероприятия
                                </div>
                                <div className="column-menu__item">О нас</div>
                                <div className="column-menu__item">
                                    Контакты
                                </div>
                                <div className="column-menu__item">Блог</div>
                            </div>
                            <div className="menu-footer__column column-menu">
                                <div className="column-menu__item">
                                    Оплата и достака
                                </div>
                                <div className="column-menu__item">
                                    Гарантия и возврат
                                </div>
                            </div>
                        </div>
                        <div className="footer__info info-footer">
                            <div className="info-footer__button">
                                Заказать звонок
                            </div>
                            <div className="info-footer__contact contact-info">
                                <div className="contact-info__phone">
                                    +7 (495) 911-10-11
                                </div>
                                <div className="contact-info__gmail">
                                    msk@magicgoldfish.ru
                                </div>
                            </div>
                            <div className="info-footer__social social-info">
                                <div className="social-info__inst">
                                    <img
                                        src="./img/header/instagram.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="social-info__vk">
                                    <img src="./img/header/vk.svg" alt="" />
                                </div>
                                <div className="social-info__fb">
                                    <img
                                        src="./img/header/facebook.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer__under under-footer">
                    <div className="under-footer__politics politics-under">
                        <div className="politics-under__confirm">
                            © 2021 MagicGoldFish.ru
                        </div>
                        <a href="#" className="politics-under__text">
                            Политика конфиденциальности
                        </a>
                    </div>
                    <div className="under-footer__cards cards-under">
                        <div className="cards-under__card">
                            <img src="./img/footer/mir.svg" alt="" />
                        </div>
                        <div className="cards-under__card">
                            <img src="./img/footer/visa.svg" alt="" />
                        </div>
                        <div className="cards-under__card">
                            <img src="./img/footer/mc.svg" alt="" />
                        </div>
                    </div>
                    <div className="under-footer__scam scam-under">
                        <div className="scam-under__text">
                            Содержимое не является публичной офертой
                        </div>
                        <a href="#" className="scam-under__agree">
                            Пользовательское соглашение
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
