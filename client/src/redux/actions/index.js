import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_CONTINENT = 'GET_BY_CONTINENT'; 
export const GET_BY_ACTIVITY = 'GET_BY_ACTIVITY';
export const ORDEN_ALFABETICO = 'ORDEN_ALFABETICO';
export const CANT_POBLACION = 'CANT_POBLACION';
export const LIST_PAGE = 'LIST_PAGE'; 

export function getCountries() {
    return async (dispatch) => {
      try {
        const response = await axios("http://localhost:3001/countries");
        return dispatch({
            type: "GET_COUNTRIES",
            payload: response.data
        });
      } catch (error) {
        alert(error.response.data.error)
      }
    };
  };

export function getByName(name) {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/countries/name?Nombre=${name}`);
      return dispatch({
        type: "GET_BY_NAME",
        payload: response.data
      });
    } catch (error) {
      alert(error.response.data.error)
    }
  };
};

export function getByContinent(continente) {
  return {
    type: "GET_BY_CONTINENT",
    payload: continente
  };
};

export function getByActivity(activity) {
  return {
    type: "GET_BY_ACTIVITY",
    payload: activity
  };
};

export function ordenAlfabetico(orden) {
  return {
    type: "ORDEN_ALFABETICO",
    payload: orden
  };
};

export function cantPoblacion(mayorMenor) {
  return {
    type: "CANT_POBLACION",
    payload: mayorMenor
  };
};

export const listPage = (countries, page) => {
  const numberCountries = 10;
  const offset = ((page - 1) * numberCountries);
  const limit = offset + numberCountries;
  const pagina = countries.slice(offset, limit);
  return {
    type: "LIST_PAGE",
    payload: pagina
  }
};

// export const getActivities = () => {
//   return 
// }