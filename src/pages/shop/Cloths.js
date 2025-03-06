import React from "react";
import { ProductList } from "../../data/ProductList";



const Cloths = ()=>{
    return (
        <div className="App">
            <h1 className="heading" > Cloth Products</h1>
            <ProductList category="cloths"/>
        </div>
    )
};

export default Cloths;