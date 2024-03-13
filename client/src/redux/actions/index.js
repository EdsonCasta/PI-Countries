import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_BY_NAME = 'GET_BY_NAME';

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