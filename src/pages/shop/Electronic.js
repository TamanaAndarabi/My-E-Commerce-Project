
import React from "react";
import { ProductList } from "../../data/ProductList";

const Electronic = ()=>{
    return (
        <div className="App">
         <h1 className="heading" >Electronic Products</h1>
         <ProductList category="electronic"/>
        </div>
    )
};

export default Electronic;

