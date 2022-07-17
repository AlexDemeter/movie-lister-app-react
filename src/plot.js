import React from "react";
import "./plot.css";

const Plot = ({ overview }) =>{
    
    return(
        <div className="plot-cont">
            <h2 className="title">Plot</h2>
            <p className="plot-text">{overview}</p>
        </div>
    );
};

export default Plot;