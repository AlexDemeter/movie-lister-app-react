import React, { useState, useEffect, useCallback, useMemo } from 'react';
import "./moviedetails.css";
import Trailers from './trailers';
import Recommendation from './recommendation';
import Plot from './plot';
import Detalis from './details';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {

    const { movieid } = useParams();

    const [moviedetalis, setMovieDetalis] = useState();



    const options = useMemo(() => {
        return {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4bc2e8f03amsh345b4449eec336ap10d4a5jsn7a20bc6cf5be',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
        };
    }, [])

    const getMovieDetalis = useCallback(async () => {
        try {
        const response = await fetch(
            `https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=${movieid}&output_language=en`, options
        );
        const data = await response.json();
        setMovieDetalis(data);
        } catch (error) {
        console.log(error)
        }
    }, [options, movieid])

    
    
    useEffect (() => {
        getMovieDetalis();
    }, [getMovieDetalis]);
    
    console.log(moviedetalis)

    if(!moviedetalis) return null
    return(
        <div className='moviedt-cont'>
            <div className='left-side'>
                <Detalis
                img={moviedetalis.posterURLs.original}
                runtime={moviedetalis.runtime}
                year={moviedetalis.year}
                imdbcount={moviedetalis.imdbvotecount}
                genres={moviedetalis.genres}
                type={moviedetalis.type}
                eps={moviedetalis.episodes}
                streamings={moviedetalis.streamingInfo}
                cast = {moviedetalis.cast}
                />
            </div>
            <div className='right-side'>
                <h1 className='title-film'>{moviedetalis.title}</h1>
                <Plot 
                overview={moviedetalis.overview}
                />
                <Trailers 
                    image={moviedetalis.backdropURLs.original}
                    title={moviedetalis.title}
                />
                <Recommendation/>
            </div>
        </div>
    );
};

export default MovieDetail;