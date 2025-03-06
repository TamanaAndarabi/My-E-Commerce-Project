
import React from "react";
import { ProductList } from "../../data/ProductList";

const Sport = ()=>{
    return (
        <div className="App">
            <h1 className="heading" > Sport Equipments</h1>
            <ProductList category="sport"/>
        </div>
    )
};

export default Sport;