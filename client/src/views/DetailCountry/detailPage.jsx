import './detailStyle.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        setCountry(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del conductor:', error.message);
      }
    };

    fetchCountry();
  }, [id]);

  return (
    <div className='detail-page'>
      <div className='actions'>
        <Link to={"/home"}>
          <button>Regresar</button>
        </Link>
        <h1>Detalle del país</h1>
      </div>
      <div className='detailCountry'>
        {country.ID && (
          <>
            <h2>ID: {country.ID}</h2>
            <h2>Nombre: {country.Nombre}</h2>
            <img src={country.ImagenDeLaBandera} />
            <h2>Continente: {country.Continente}</h2>
            <h2>Capital: {country.Capital}</h2>
            <h2>Subregion: {country.Subregion}</h2>
            <h2>Area: {country.Area}</h2>
            <h2>Poblacion: {country.Poblacion}</h2>
            <div className='detailActivity'>
              {country.Activities && country.Activities.length > 0 && (
                <>
                  <h2>Actividades:</h2>
                  {country.Activities.map((activity) => (
                    <div key={activity.ID}>
                      <h3>ID: {activity.ID}</h3>
                      <h3>Nombre: {activity.Nombre}</h3>
                      <h3>Dificultad: {activity.Dificultad}</h3>
                      <h3>Duracion: {activity.Duracion}</h3>
                      <h3>Temporada: {activity.Temporada}</h3>
                    </div>
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailPage;


