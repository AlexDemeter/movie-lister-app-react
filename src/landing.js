import React from "react";
import Cardsrender from './cardsrender';
import Newest from './newest';
import Filters from './filter';

const Landing = () => {
    
    return(
        <div>
            <Newest />
            <Filters />
            <Cardsrender/>
        </div>
    );
};

export default Landing