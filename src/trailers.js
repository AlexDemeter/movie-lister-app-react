import React from "react";
import "./trailers.css";
import Playbtn from "./playbtn";
import "./playbtn.css"

const Trailers = ({ image, title }) => {
    return(
        <div className="trailers-cont">
            <h2 className="title">Trailers</h2>
            <div className="trailers">
                <div className="trailer elem">
                    <div className="video-cont">
                        <Playbtn/>
                        <img className="trailer-img" alt="" src={image}/>
                    </div>
                    <p className="trailer-title">{title} - Trailer 1</p>
                </div>
                <div className="trailer">
                    <div className="video-cont">
                        <Playbtn/>
                        <img className="trailer-img" alt="" src={image}/>
                    </div>
                    <p className="trailer-title">{title} - Trailer 2</p>
                </div>
                <div className="trailer">
                    <div className="video-cont">
                        <Playbtn/>
                        <img className="trailer-img" alt="" src={image}/>
                    </div>
                    <p className="trailer-title">{title} - Trailer 3</p>
                </div>
                <div className="trailer">
                    <div className="video-cont">
                        <Playbtn/>
                        <img className="trailer-img" alt="" src={image}/>
                    </div>
                    <p className="trailer-title">{title} - Trailer 4</p>
                </div>
            </div>
        </div>
    );
};

export default Trailers;