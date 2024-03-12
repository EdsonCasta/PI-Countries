import { Link } from "react-router-dom";

const Card = ({ country }) => {
    const { ImagenDeLaBandera, Nombre, Continente, id } = country;

    return (
        <Link to={`/home/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div>
                {country.ImagenDeLaBandera && <img src={ImagenDeLaBandera} />}
                {country.Nombre && <h2>{Nombre}</h2>}
                {country.Continente && <p>{Continente}</p>}
            </div>
        </Link>
    );
};

export default Card;
