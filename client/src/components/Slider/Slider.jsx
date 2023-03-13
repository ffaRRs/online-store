import React, { useRef } from "react";
import "swiper/css";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper";
import sliderHeader from "../../data/slider/sliderHeader";

const Slider = () => {

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
                {sliderHeader.map((slide) => {
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
