import { ORDEN_ALFABETICO, GET_BY_ACTIVITY, GET_BY_CONTINENT, GET_BY_NAME, GET_COUNTRIES, CANT_POBLACION, LIST_PAGE, GET_ACTIVITIES } from "../actions";

let initialState = { allCountries: [], countriesCopy: [], page: [], allActivities: [] }

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
        case GET_BY_CONTINENT:
            return {
                ...state,
                allCountries: state.countriesCopy.filter((country) =>
                    country && country.Continente === action.payload)
            };
        case GET_BY_ACTIVITY:
            const filteredCountries = state.countriesCopy.filter((country) =>
                country && country.Activities && country.Activities.find((activity) =>
                    activity && activity.Nombre && activity.Nombre === action.payload))
                    // console.log('Actividad seleccionada:', action.payload);
    // console.log('Países filtrados:', filteredCountries);
            return {
                ...state,
                allCountries: filteredCountries
            };
        case ORDEN_ALFABETICO:
            const orden = action.payload;
            if (orden === "desc") state.allCountries.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
            if (orden === "asc") state.allCountries.sort((a, b) => b.Nombre.localeCompare(a.Nombre));
            return {
                ...state,
                allCountries: [...state.allCountries]
            };
        case CANT_POBLACION:
            const mayorMenor = action.payload;
            if (mayorMenor === "desc") state.allCountries.sort((a, b) => b.Poblacion - a.Poblacion);
            if (mayorMenor === "asc") state.allCountries.sort((a, b) => a.Poblacion - b.Poblacion);
            return {
                ...state,
                allCountries: [...state.allCountries]
            };
        case LIST_PAGE:
            return {
                ...state,
                pagina: action.payload
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload
            };
        default:
            return state;
    };
};

export default rootReducer;