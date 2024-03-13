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
    <div>
      <Link to={"/home"}>
        <button>Regresar</button>
      </Link>
      <h1>Detalles del conductor</h1>
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
        </>
      )}
    </div>
  );
}

export default DetailPage;


