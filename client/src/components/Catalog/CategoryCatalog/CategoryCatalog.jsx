import React from "react";
import './CategoryCatalog.scss'

const CategoryCatalog = (props) => {
    return (
        <div style={{height: props?.height}} className="catalog__category catalog-category">
            <div style={{width: props?.width}} className="catalog-category__img">
                <img src={props?.img} alt="" />
            </div>
            <div style={{padding: props?.padding}} className="catalog-category__title">{props.name}</div>
        </div>
    );
};

export default CategoryCatalog;
