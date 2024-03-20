import React from "react";
import Card from "../Card/card";

import "./cardsStyle.css";

function Cards({ pagina }) {

    const countriesList = pagina;

    return (
        <div className="cards-list">
            <div className='bodyCards'>
            {countriesList?.map((country) => (
                <div className='card'>
                <Card key={country.ID} country={country} />
                </div>
            ))}
            </div>
        </div>
    );
};

export default Cards;