import React from "react";
import "./moviecard.css";
const Card = ({ country, year, title, ratingimdb, ratingrt, genre, image }) => {

    return(
        <div className="card" style={{backgroundImage: `url(${image})`}}>
            <div className="empty"></div>
            <div className="card-desc">
                <div className="title-cont">
                    <h4 className="made">{country}</h4><h4 className="title-yellow">{year}</h4>
                </div>
                <h3>{title}</h3>
                <div className="rating">
                    <div className="rate-cont">
                        <img alt="" src="https://clipartcraft.com/images/imdb-logo-icon-4.png" className="imdb-img"></img>
                        <h5>{ratingimdb}%</h5>
                    </div>
                    <div className="rate-cont">
                        <img alt="" className="imdb-img" src="https://th.bing.com/th/id/R.7d004a3c33b1981b6424d2050aa667cd?rik=8cmVNy%2fsJ0a3Dw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-tomato%2ftransparent-tomato-5.png&ehk=7FabZs6VNbbcQGXr299I9urkdq0Vong%2bsRZvyMwJLDU%3d&risl=&pid=ImgRaw&r=0"></img>
                        <h5>{ratingrt}%</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;