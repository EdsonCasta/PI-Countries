import Card from "../Card/card";

function Cards({ allCountries }) {

    const countriesList = allCountries;

    return (
        <div>
            {countriesList?.map((country) => (
                <Card key={country.ID} country={country} />
            ))}
        </div>
    );
};

export default Cards;