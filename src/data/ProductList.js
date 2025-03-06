
import React , { useState , useContext} from "react";
import { PRODUCTS } from "../data/PRODUCTS";
import { ShopContext } from "../textContext/ShopContext";
import { SearchBar } from "./SearchBar";




export const ProductList = ({ category , searchTerm }) => {
        const { cartItem , addToCart , removeFromCart } = useContext(ShopContext);
        
        const filteredProducts = PRODUCTS
        .filter(product => !category || product.category === category)  // فیلتر بر اساس گروه
        .filter(product => searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true );  // فیلتر بر اساس جستجو

    return(
        
        <div className="App">
            {/* <h2>Category : {category ? category : "All Products"}</h2> */}
                <div className="row" >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => {
                        const isInCart = cartItem.some((item)=> item.id === product.id);

                            return(
                                < div key={product.id}  className="col-3 " style={{marginTop:"100px"}}>
                                    <div className="column">
                                    <img src={product.productImage} alt={product.name} style={{ width : "80%" , height : "300px" }}/>
                                    <h3>{product.name}</h3>
                                    <p>Price :{product.price} $</p>
                                    </div>

                                    <button className= "btn btn-style " onClick={()=> addToCart(product.id)}> Add </button>
                                    <span className="mx-1">{cartItem?.filter((row)=> row.id === product.id)[0]?.count}</span>
                                    { isInCart && 
                                    (<button className="btn btn-style" onClick={ ()=> removeFromCart(product.id)} > Remove </button> )}
                                </div>
                            );
                        })): (
                            <p> Not Found !</p>
                        )};
                </div>
        </div>
    );
   
};

