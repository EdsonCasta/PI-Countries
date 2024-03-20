import { Link } from "react-router-dom";

import "./cardStyle.css";

const Card = ({ country }) => {

    const { ImagenDeLaBandera, Nombre, Continente, ID } = country;

    return (
        <Link to={`/home/${ID}`}>
            <div className="card-container">
                <div className='imgFlag'>
                    {country.ImagenDeLaBandera && <img src={ImagenDeLaBandera} />}
                </div>
                <div className='namePais'>
                    {country.Nombre && <h2>{Nombre}</h2>}
                </div>
                <div className={`divInfo ${Continente}`}>
                    <div className='info'>
                        {country.Continente && <p>{Continente}</p>}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
