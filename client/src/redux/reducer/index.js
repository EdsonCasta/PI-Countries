import { GET_BY_NAME, GET_COUNTRIES } from "../actions";

let initialState = { allCountries: [], countriesCopy: [] }

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                countriesCopy: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                allCountries: action.payload
            };
        default:
            return state;
    }
}

export default rootReducer;