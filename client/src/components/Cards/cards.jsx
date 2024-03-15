import React from "react";
import Card from "../Card/card";

import "./cardsStyle.css";

function Cards({ pagina }) {

    const countriesList = pagina;

    return (
        <div className="cards-list">
            {countriesList?.map((country) => (
                <Card key={country.ID} country={country} />
            ))}
        </div>
    );
};

export default Cards;