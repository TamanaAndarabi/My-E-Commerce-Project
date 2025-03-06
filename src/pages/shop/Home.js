import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductList } from "../../data/ProductList";
import { SearchBar } from "../../data/SearchBar";

const Shop = () => {

    const [ searchTerm , setSearchTerm ] = useState("");

    return (
        <React.Fragment>
        <div className="App">
                <h1 className="heading">Online Shopping</h1>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ProductList categories={["cloths", "kitchen", "sport", "electronic"]} searchTerm={searchTerm} />
            </div>
        </React.Fragment>
    );
};

export default Shop;