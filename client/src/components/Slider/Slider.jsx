import React, { useRef } from "react";
import "swiper/css";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper";

const Slider = () => {
    const slidesInfo = [
        {
            title: "Самая популярная карточная игра",
            name: "Magic: the Gathering",
            img: "./img/slider/1.jpg",
        },
        {
            title: "Самая популярная карточная",
            name: "Wharhammer",
            img: "./img/slider/1.jpg",
        },
        {
            title: "Самая популярная",
            name: "Мероприятия",
            img: "./img/slider/1.jpg",
        },
        {
            title: "Самая игра",
            name: "Контакты",
            img: "./img/slider/1.jpg",
        },
        {
            title: "Самая карточная игра",
            name: "+7 (495) 911-10-11",
            img: "./img/slider/1.jpg",
        },
    ];

    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    return (
        // <div className="container">
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation={{
                    prevEl: swiperNavPrevRef.current,
                    nextEl: swiperNavNextRef.current,
                }}
                spaceBetween={8}
                loop={true}
                speed={800}
                slidesPerView={1.5}
                centeredSlides={true}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                    swiper.params.navigation.nextEl = swiperNavNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="myswiper"
            >
                {slidesInfo.map((slide) => {
                    return (
                        <SwiperSlide className="swiperslide">
                            <img src={slide.img} alt="" />
                            <div className="swiperslide__info info-slide">
                                <div className="info-slide__content">
                                    <div className="info-slide__category">
                                        {slide.title}
                                    </div>
                                    <div className="info-slide__name">
                                        {slide.name}
                                    </div>
                                </div>
                                <a className="info-slide__more" href="#">
                                    Подробнее
                                </a>
                            </div>
                        </SwiperSlide>
                    );
                })}

                <div className="swiperNavPrev" ref={swiperNavPrevRef}></div>
                <div className="swiperNavNext" ref={swiperNavNextRef}></div>
            </Swiper>
        // </div>
    );
};

export default Slider;
