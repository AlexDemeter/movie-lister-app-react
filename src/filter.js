import React from 'react';
import "./filter.css";
import { useSearchContext, useSearchDispatch } from "./context/SearchProvider";
import { SearchActions } from "./context/SearchReducer";


const Filters = () => {
    const seachDispatch = useSearchDispatch()    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const genreInput = event.target.genre.value;
        const typeInput = event.target.type.value;
        const countryInput = event.target.country.value;
        const sSInput = event.target.streamingService.value;
        
        const Input = React.createContext(genreInput, typeInput, countryInput, sSInput);
        seachDispatch({
            type: SearchActions.SET_DATA,
            filtergenre: genreInput,
            filtertype: typeInput,
            country: countryInput,
            streamingService: sSInput
        })        
    };
    return(
        <div className='dropdown-cont'>
            <form className="filt-form" onSubmit={handleSubmit}>
                <select required className="select-opt" name="country" id="country" placeholder="Streaming Service">
                    <option value="">Country</option>
                    <option value="be">Belgium</option>
                    <option value="bg">Bulgaria</option>
                    <option value="ca">Canada</option>
                    <option value="cz">Czech Republic</option>
                    <option value="de">Denmark</option>
                    <option value="fi">Finland</option>
                    <option value="fr">France</option>
                    <option value="gr">Germany</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="pt">Portugal</option>
                    <option value="ru">Russia</option>
                    <option value="sp">Spain</option>
                    <option value="tr">Turkey</option>
                    <option value="ue">United Emirates</option>
                    <option value="uk">United Kingdom</option>
                    <option value="us">United States</option>
                </select>
                <select className="select-opt" name="genre" id="genre" placeholder="Genre">
                    <option value="">Genre</option>
                    <option value="1">Biography</option>
                    <option value="2">Film Noir</option>
                    <option value="3">Game Show</option>
                    <option value="4">Musical</option>
                    <option value="5">Sport</option>
                    <option value="6">Short</option>
                    <option value="12">Adventure</option>
                    <option value="14">Fantasy</option>
                    <option value="16">Animation</option>
                    <option value="18">Drama</option>
                    <option value="27">Horror</option>
                    <option value="28">Action</option>
                    <option value="35">Comedy</option>
                    <option value="36">History</option>
                    <option value="37">Western</option>
                    <option value="53">Thriller</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentary</option>
                    <option value="878">Science Fiction</option>
                    <option value="9648">Mystery</option>
                    <option value="10402">Music</option>
                    <option value="10749">Romance</option>
                    <option value="10751">Family</option>
                    <option value="10752">War</option>
                    <option value="10763">News</option>
                    <option value="10764">Reality</option>
                </select>
                <select required className="select-opt" name="type" id="type" placeholder="Type">
                    <option value="">Type</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </select>
                <select required className="select-opt" name="streamingService" id="streamingService" placeholder="Streaming Service">
                    <option value="">Streaming service</option>
                    <option value="hbo">HBO Max</option>
                    <option value="netflix">Netflix</option>
                    <option value="disney">Disney+</option>
                    <option value="prime">Amazon Prime Video</option>
                    <option value="hulu">Hulu</option>
                    <option value="peacock">Peacock</option>
                    <option value="paramount">Paramount</option>
                    <option value="apple">Apple</option>
                    <option value="starz">Starz</option>
                    <option value="showtime">ShowTime</option>
                    <option value="mubi">Mubi</option>
                </select>
                
                <input type="submit" value="Apply" className='apply-btn'></input>
            </form>
        </div>
        
    );
};

export default Filters;