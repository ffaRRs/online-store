import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const Category = ({ title, findSubCategory, flagStopHover}) => {
    // let flagCategoryHover = false;
    let [flagCategoryHover, setFlagCategoryHover] = useState(false);

    const { dropMenuStore } = useContext(Context);

    let categoryHover = (e) => {
        
        findSubCategory();

        // console.log(e.target.childNodes[0].innerHTML);
        // if(dropMenuStore.currentElement === e.target.className){
        //     if(dropMenuStore.column === e.target.childNodes[0].innerHTML){
        //         setFlagCategoryHover(true);
        //     }else{
        //         setFlagCategoryHover(false)
        //     }
        // }

        // dropMenuStore.setCurrentElement(e.target.className);
        dropMenuStore.division(e);

        
        // if(flagStopHover){
        //     setFlagCategoryHover(true);
        // }else{
            setFlagCategoryHover(!flagCategoryHover);
        // }
    };
    let mouseLeave = (e) => {
        // if(flagStopHover){
        //     setFlagCategoryHover(true);
        // }else{
            // setFlagCategoryHover(!flagCategoryHover);
        // }
        // if(dropMenuStore.currentElement === e.target.childNodes[0].innerHTML){
        //     setFlagCategoryHover(true);
        // }else{
            setFlagCategoryHover(!flagCategoryHover);
        // }

        // dropMenuStore.setCurrentElement(e.target.childNodes[0].innerHTML);

    }

    // console.log(dropMenuStore.column);
    return (
        <li
            className={
                !flagCategoryHover
                    ? "drop-categories__item"
                    : "drop-categories__item active"
            }
            onMouseEnter={(e) => categoryHover(e)}
            onMouseLeave={(e) => mouseLeave(e)}
        >
            <div className="drop-categories__title">{title}</div>
            {/* <img src="img/header/more-categoty.svg" alt="" /> */}
        </li>
    );
};

export default observer(Category);
