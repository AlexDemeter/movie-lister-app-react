import React, { useState, useEffect, useCallback, useMemo } from "react";
import Card from "./moviecard";
import { Link } from "react-router-dom";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import "./stepper.css";
import { useSearchContext } from "./context/SearchProvider";

const Cardsrender = () =>{ 

    const [movies, setMovies] = useState();
    const searchContext = useSearchContext();

    const [count, setCount] = useState(1);
    const [country, setCountry] = useState("us");
    const [service, setService] = useState("netflix")
    const [type, setType] = useState("movie");
    const [search,setSearch] = useState("");
    const [genre, setGenre] = useState('');
    const [ismovies, setismovies] = useState(false);
    const increment = () => {
        setCount((prev) => prev + 1)
        setSearch('');
        setType('movie');
    };
    const decrement = () => {
        setCount((prev) => prev > 1 ? prev - 1 : 1)
        setSearch('');
        setType('movie');
    };


    const options = useMemo(() => {
        return {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4bc2e8f03amsh345b4449eec336ap10d4a5jsn7a20bc6cf5be',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
        };
    }, [])
    

    const [lengthMovies, setLengthMovies] = useState(0);

    const getMovies = useCallback(async () => {
        try {
        const response = await fetch(
            `https://streaming-availability.p.rapidapi.com/search/basic?country=${country}&service=${service}&type=${type}&genre=${genre}&keyword=${search}&page=${count}`, options
        );


        if ((searchContext.query !== '') && (searchContext.filter !==  '')) {
            setType(searchContext.filter);
            setSearch(searchContext.query);
            console.log({type, search})
        } else {
            setType("movie");
            setSearch('');
        }
/*
        if ((searchContext.filtertype !== undefined) && (searchContext.country !== undefined) && (searchContext.filtergenre !== undefined) && (searchContext.streamingService !== undefined)) {
            setCountry(searchContext.country);
            setType(searchContext.filtertype);
            setGenre(searchContext.filtergenre);
            setService(searchContext.streamingService);
            console.log({country, type, genre, service})
        } else {
            setCountry("");
            setType("movie");
            setGenre("");
            setService("netflix");
        }
*/

        const data = await response.json();
        setMovies(data.results);
        setismovies(true);
        console.log(lengthMovies)
        } catch (error) {
        console.log(error)
        }
    }, [options, count, country, service, type, search, genre])

    
    useEffect (() => {
        getMovies();
    }, [getMovies]);
    
    console.log(movies);
    


    return(
        <>
        <div className='index-card-div'>
            { ismovies ? movies.map(card =>(
                <Link className="link" to={`/details/${card.imdbID}`}>
                    <Card
                    country={card.countries[0]}
                    key={card.imdbID}
                    year={card.year}
                    title={card.originalTitle}
                    ratingimdb={card.imdbRating}
                    ratingrt={card.tmdbRating}
                    image={card.posterURLs[780]}
                    />
                </Link> 
              )) : <h1 style={{ color: "white", width: "max-content" }}>WE DIDNT HAVE THIS SERIES/MOVIE IN DATABASE</h1> }
        </div>
            <div className="stepper-cont">
                <div className="arrow">
                    <button onClick={decrement}><AiFillCaretLeft/></button>
                </div>
                <h3>{count}</h3>
                <div className="arrow">
                    <button onClick={increment}><AiFillCaretRight/></button>
                </div>
            </div>
        
    </>
    );
};

export default Cardsrender;