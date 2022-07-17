import React from "react";
import "./details.css";

const Detalis = ({ runtime, year, imdbcount, genres, type, eps, img, cast }) => {
    
    
    return(
        <div className="detalis-cont">
            <div className="img-cont">
                <img alt="" src={`${img}`}/>
            </div>
            <div className="informations-cont">
                <h3>Informations</h3>
                <div className="informations">
                    <p className="info-type"><b>Type:</b>{type}</p>
                    <p className="info-type"><b>Episodes:</b>{eps}</p>
                    <p className="info-type"><b>Status:</b>Currently Airing</p>
                    <p className="info-type"><b>Aired:</b>{year}</p>
                    <p className="info-type"><b>Genres:</b>{genres}</p>
                    <p className="info-type"><b>Duration:</b>{runtime} minutes</p>
                </div>
            </div>
            <div className="statistics-cont">
                <h3>Statistics</h3>
                <div className="statistics">
                    <p className="stat-type"><b>Score:</b>8.65</p>
                    <p className="stat-type"><b>IMDB Vote Count</b>{imdbcount}</p>
                    <p className="stat-type"><b>IMDB Rating:</b>8.4</p>
                    <p className="stat-type"><b>RT Rating:</b>9</p>
                </div>
            </div>
            <div className="cast-cont">
                <h3>Cast</h3>
                <div className="cast">
                    {cast.length > 1 ? cast.map(Actors =>(
                        <p>{Actors}</p>
                    )) : <p>No actors in Database</p>}   
                </div>
            </div>
        </div>
    );
};

export default Detalis;