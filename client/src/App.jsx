import React, { useContext } from "react";
import { Context } from ".";
import "./normalize.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { observer } from "mobx-react-lite";
import Slider from "./components/Slider/Slider";
import Catalog from "./components/Catalog/Catalog";
import SliderBuy from "./components/SliderBuy/SliderBuy";
import Event from "./components/Event/Event";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
    const { dropMenuStore } = useContext(Context);
    let closeMenu = function (e) {
        // console.log(e.target.parentNode.className.includes("menu__catalog"));
        
        if (
            (e.target.parentNode.className.includes("menu__catalog") || e.target.className.includes("catalog-menu")) &&
            !dropMenuStore.openDropMenu
        ) {
            dropMenuStore.chageOpenDropMenu();
        } else {
            if (
                !e.target.className.includes("drop-categories") &&
                !e.target.className.includes("drop-menu") &&
                !e.target.className.includes("row-column") &&
                !e.target.className.includes("media-categories")
            ) {
                dropMenuStore.closeDropMenu();
            }
        }
    };

    return (
        <div onClick={(e) => closeMenu(e)}>
            <Header />
            <Menu />
            <Slider />
            <div className="container">
                <Catalog />
                <SliderBuy id={1} name="Успей купить"/>
                <SliderBuy id={2} name="Специальные предложения"/>
                <Event/>
                <MoreInfo/>
                <About/>
            </div>
            <Footer/>
        </div>
    );
}

export default observer(App);
