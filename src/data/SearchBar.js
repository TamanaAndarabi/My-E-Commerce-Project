import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export const SearchBar = ({ searchTerm , setSearchTerm })=>{

        const handleSearch = (e) => {
            setSearchTerm(e.target.value);
        };
    

    return(
        <React.Fragment>
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col"></div>
                            <div className="col">
                                <form action="http://localhost:3000/" method="GET" className="form-control" role="search">

                                    <input type="text"
                                           name="search" 
                                           placeholder="Search Products here..." 
                                           required=""  
                                           value={searchTerm}
                                           onChange={handleSearch} />

                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#61dafb" }} />
                                </form>
                            </div>
                    <div className="col"></div>
                </div>
            </div>
        </React.Fragment>

       );
    };
