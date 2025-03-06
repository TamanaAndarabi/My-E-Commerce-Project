import React from "react";
import { ProductList } from "../../data/ProductList";

const Kitchen = ()=>{
    return (
        <div className="App">
           <h1 className="heading" >Kitchen Equipments </h1>
           <ProductList category="kitchen"/>
        </div>
    )
};

export default Kitchen;