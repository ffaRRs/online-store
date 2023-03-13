import React, { useRef } from "react";
import "./SliderBuy.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper";
import sliderTimeBuy from "../../data/slider/sliderTimeBuy";

const SliderBuy = ({name, id}) => {
    const swiperNavPrevRefBuy = useRef(null);
    const swiperNavNextRefBuy = useRef(null);
    // const swiper = useSwiper();

    return (
        <div className="timebuy">
            <div className="timebuy__title">{name}</div>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation={{
                    prevEl: swiperNavPrevRefBuy.current,
                    nextEl: swiperNavNextRefBuy.current,
                }}
                spaceBetween={20}
                speed={800}
                slidesPerView={4}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl =
                        swiperNavPrevRefBuy.current;
                    swiper.params.navigation.nextEl =
                        swiperNavNextRefBuy.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="myswiperbuy"
            >
                { id === 1 ? 

                    sliderTimeBuy.map((slide) => {
                        return (
                            <SwiperSlide className="timebuy__slidebuy slidebuy">
                                <div className="slidebuy__img">
                                    <img src={slide.img} alt="" />
                                </div>
                                <div className="slidebuy__info info-sliderbuy">
                                    <div className="info-sliderbuy__count">{slide.people}</div>
                                    <div className="info-sliderbuy__time">
                                        {slide.timePlay}
                                    </div>
                                    <div className="info-sliderbuy__age">{slide.age}</div>
                                </div>
                                <div className="slidebuy__label label-slidebuy">
                                    <div className="label-slidebuy__name">
                                        {slide.name}
                                    </div>
                                    <div className="label-slidebuy__cost">
                                        {slide.price} ₽
                                    </div>
                                </div>
                                <div className="slidebuy__btn in-cart">
                                    В корзину
                                </div>
                                <div className="slidebuy__btn buy-one-click">
                                    Купить в 1 клик
                                </div>
                            </SwiperSlide>
                        );
                    })
                    :
                    sliderTimeBuy.map((slide) => {
                        return (
                            <SwiperSlide className="timebuy__slidebuy slidebuy">
                                <div className="slidebuy__sale">-15%</div>
                                <div className="slidebuy__img">
                                    <img src={slide.img} alt="" />
                                </div>
                                <div className="slidebuy__info info-sliderbuy">
                                    <div className="info-sliderbuy__count">{slide.people}</div>
                                    <div className="info-sliderbuy__time">
                                        {slide.timePlay}
                                    </div>
                                    <div className="info-sliderbuy__age">{slide.age}</div>
                                </div>
                                <div className="slidebuy__label label-slidebuy">
                                    <div className="label-slidebuy__name">
                                        {slide.name}
                                    </div>
                                    <div className="label-slidebuy__cost">
                                        <span>4350 ₽</span> {slide.price} ₽
                                    </div>
                                </div>
                                <div className="slidebuy__btn in-cart">
                                    В корзину
                                </div>
                                <div className="slidebuy__btn buy-one-click">
                                    Купить в 1 клик
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
                

                <div
                    className="swiperNavPrevBuy"
                    ref={swiperNavNextRefBuy}
                ></div>
                <div
                    className="swiperNavNextBuy"
                    ref={swiperNavPrevRefBuy}
                ></div>
            </Swiper>
        </div>
    );
};

export default SliderBuy;
