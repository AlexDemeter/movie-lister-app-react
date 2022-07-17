import React, { createContext } from "react";
import "./nav.css";
import "./searchbar.css";
import { Link } from "react-router-dom";
import { useSearchContext, useSearchDispatch } from "./context/SearchProvider";
import { SearchActions } from "./context/SearchReducer";

const Nav = () => {

    const seachDispatch = useSearchDispatch()    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const searchInput = event.target.search.value;
        const typeInput = event.target.elements.option.value;
        const Input = React.createContext(searchInput, typeInput);
        seachDispatch({
            type: SearchActions.SET_DATA,
            query: searchInput,
            filter: typeInput
        })        
    };
    
    return (
        <div className="navcont">
            <React.StrictMode> 
                <Link to="/" className="link">
                    <div className="title-cont">  
                        <div className="title-yellowp">Movie.</div><p>search</p>    
                    </div>
                </Link>
                <div className="cont-search">
                    <form className="form-search" onSubmit={handleSubmit}>
                        <input required type="text" name="search" placeholder="Search.."></input>
                        <div>
                            <input required type="radio" name="option" value="movie"/>
                            <label>Movie</label>
                            <br/>
                            <input required type="radio" name="option" value="series"/>
                            <label>Series</label>
                        </div>
                        <input className="btn-search" type="submit" value="Submit" ></input>
                    </form>
                </div>
            </React.StrictMode>
        </div>
    );
};

export default Nav;