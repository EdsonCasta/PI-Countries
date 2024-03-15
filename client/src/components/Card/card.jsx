import { Link } from "react-router-dom";

import "./cardStyle.css";

const Card = ({ country }) => {

    const { ImagenDeLaBandera, Nombre, Continente, ID } = country;

    return (
        <Link to={`/home/${ID}`}>
            <div className="card-container">
                {country.ImagenDeLaBandera && <img src={ImagenDeLaBandera} />}
                {country.Nombre && <h2>{Nombre}</h2>}
                {country.Continente && <p>{Continente}</p>}
            </div>
        </Link>
    );
};

export default Card;
