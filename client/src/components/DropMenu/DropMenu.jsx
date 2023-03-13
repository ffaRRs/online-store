import React, { useContext, useState } from "react";
import warhammerItems from "../../data/dropMenu/subCategory/warhammer4000";
import SubCategory from "../UI/SubCategory";
import categories from "../../data/dropMenu/categories";
import Category from "../UI/Category";
import "./DropMenu.scss";
import {observer} from 'mobx-react-lite'
import { Context } from "../..";
import allSubCategory from "../../data/dropMenu/allSubCategory";

const DropMenu = () => {
    let [subCategory, setSubCategory] = useState(allSubCategory[0].file);
    let [flagStopHover, setFlagStopHover] = useState(false);
    const {dropMenuStore} = useContext(Context);
    let columnCategoty = [0, 1, 2];
    let currentElem = null;


    let createObject = function (mass) {
        let items = 3;
        let whole = Math.ceil(mass.length / items);
        let remains = mass.length - whole * (items - 1);
        let resultMass = [];
        let subMass = [];
        let i = 0;
        while (i < mass.length) {
            if (mass.length < i + whole) {
                for (let j = 0; j < remains; j++) {
                    subMass.push(mass[i + j]);
                }
            } else {
                for (let j = 0; j < whole; j++) {
                    subMass.push(mass[i + j]);
                }
            }
            // console.log(remains);
            resultMass.push(subMass);
            subMass = [];

            i += whole;
        }
        return resultMass;
    };
    let findSubCategory = function(){
        allSubCategory.forEach((item, index) => {
            if(item.name === dropMenuStore.column){
                setSubCategory(allSubCategory[index].file)
            }
        })
    }

    let mouseOverItem = function(event){
        // console.log(flagStopHover);

        // if (currentElem) return;

        // let targetItem = event.target.closest('.drop-categories__item');
        // let targetSub = event.target.closest('.row-column');


        // if (!targetItem && !targetSub) return;
        // if (!event.target.contains(targetItem) && !event.target.contains(targetSub)) return;
        // currentElem = targetItem ?? targetSub;
        // console.log(event.target.className.includes('drop-categories'))
        if(event.target.className.includes('drop-categories')){
            setFlagStopHover(false);
        }
        else{
            setFlagStopHover(true)
        }
        // console.log(event.target);
        // if(event.target.className.includes('row-column')){
        //     setFlagStopHover(true);
        // }

        // console.log(flagStopHover)
        // if(){
        //     setFlagStopHover(true);
        // }else{
        //     setFlagStopHover(false);
        // }
    }

    

    return (
        <div className="container">
            <div className={!dropMenuStore.openDropMenu ? "drop-menu" : "drop-menu active"} onMouseOver={(e) => mouseOverItem(e)}>
                <div className="drop-menu__row"  >
                    <div className="drop-menu__column">
                        <ul className="drop-menu__categories drop-categories">
                            <li className="drop-categories__item">
                                Все категории
                            </li>
                            {categories.map((category) => (
                                <Category title={category} findSubCategory={() => findSubCategory()} flagStopHover={flagStopHover}/>
                            ))}
                        </ul>
                    </div>
                    <div className="drop-menu__column row-column">
                        <div className="row-column__title">{dropMenuStore.column}</div>
                        <div className="row-column__row">
                            {columnCategoty.map((column) => (
                                <SubCategory
                                    items={createObject(subCategory)[column]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(DropMenu);
