import React from "react";
import "./footer.css";


const Footer = () => {
    
    return(
        <div className="Footer-cont">
            <div className="title-cont-foot">
                <div className="title-yellow-foot">Movie.</div><p>search</p>
            </div>
            <div className="list-cont">
                <ul className="list-ul">
                    <li className="list-il">Contact</li>
                    <li className="list-il">FAQ</li>
                    <li className="list-il">Terms and Conditions</li>
                    <li className="list-il">Privacy Policy</li>
                </ul>
            </div>
            <div className="copyright">
                <p>@2022 Movie.lister</p>
            </div>
        </div>
    );
};

export default Footer;