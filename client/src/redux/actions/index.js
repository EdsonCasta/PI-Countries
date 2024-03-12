import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';

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