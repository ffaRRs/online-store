import React, { useContext } from "react";
import { Context } from ".";
import "./normalize.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { observer } from "mobx-react-lite";
import Slider from "./components/Slider/Slider";

function App() {
    const { store, dropMenuStore } = useContext(Context);
    let closeMenu = function(e){
        // console.log(e.target.className)
        // drop-menu | drop-categories | row-column
        console.log(e.target);
        // if(!dropMenuStore.openDropMenu){
            //e.target.className.includes('catalog-menu__burger') && 
            if(!e.target.className.includes('drop-categories') && !e.target.className.includes('drop-menu') && !e.target.className.includes('row-column')){
                // dropMenuStore.closeDropMenu();
                dropMenuStore.chageOpenDropMenu();
            }
            // else{
            //     dropMenuStore.chageOpenDropMenu();
            // }
        // }
    }

    return (
        <div onClick={(e) => closeMenu(e)}>
            <Header />
            <Menu />
            <Slider/>
            <div className="container"></div>
        </div>
    );
}

export default observer(App);
