import React, { useCallback, useState, useMemo, useEffect } from "react";
import "./recommendation.css";
import Card from "./moviecard";
import { Link } from "react-router-dom";

const Recommendation = () =>{

    const [randoms, setRandoms] = useState([]);

    const [num, setNum] = useState(11);
    
    
    
    

    const options = useMemo(() => {
        return {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4bc2e8f03amsh345b4449eec336ap10d4a5jsn7a20bc6cf5be',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
        };
    }, [])

    const getRandoms = useCallback(async () => {
        try {
        const response = await fetch(
            `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&page=${num}&language=en`, options
        );
        const data = await response.json();
        setRandoms(data);
        } catch (error) {
        console.log(error)
        }
    }, [options, num])

    useEffect (() => {
        getRandoms();
    }, [getRandoms]);
    
    console.log(randoms);

    return(
        <div className="rmtn-cont">
            <h2 className="title">Recommendation</h2>
            <div className="rmtns">
                {randoms.results && randoms.results.map(card =>(
                    <Link className="link" to={`/details/${card.imdbID}`}>
                        <Card
                        country={card.countries[0]}
                        key={card.imdbID}
                        year={card.year}
                        title={card.originalTitle}
                        ratingimdb={card.imdbRating}
                        ratingrt={card.tmdbRating}
                        genre={card.genres[0]}
                        image={card.posterURLs[780]}
                        />
                    </Link>    
                ))}  
            </div>
        </div>
    );
};

export default Recommendation;