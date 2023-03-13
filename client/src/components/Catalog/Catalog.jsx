import React from "react";
// import Category from "";
import "./Catalog.scss";
import CategoryCatalog from "./CategoryCatalog/CategoryCatalog";
import catalog from "../../data/catalog";

const Catalog = () => {
    return (
        <div className="catalog">
            <div className="catalog__title">Каталог</div>
            <div className="catalog__row">
                <div className="catalog__column">
                    <CategoryCatalog
                        width="540px"
                        height="380px"
                        padding="13px 32px"
                        img="./img/catalog/1.png"
                        name="Настольные игры"
                    />
                </div>
                <div className="catalog__column">
                    {catalog.map((cat) => {
                        return (
                            <CategoryCatalog
                                width="240px"
                                height="175px"
                                padding="12px 19px"
                                img={cat.img}
                                name={cat.name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
