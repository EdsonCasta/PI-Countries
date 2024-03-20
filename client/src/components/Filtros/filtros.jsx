import './filtrosStyle.css';

import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cantPoblacion, getByActivity, getByContinent, getCountries, ordenAlfabetico } from "../../redux/actions";


function Filtros() {

    const selectActividades = useSelector(state => state.allActivities);

    const dispatch = useDispatch();

    function handleContinente(event) {
        dispatch(getByContinent(event.target.value));
    };

    function handleActivities(event) {
        dispatch(getByActivity(event.target.value));
    };

    function handleAlfabetico(event) {
        dispatch(ordenAlfabetico(event.target.value));
    };

    function handlePoblacion(event) {
        dispatch(cantPoblacion(event.target.value));
    };

    return (
        <div className="filter-container">
            <select className="filter-select" name="Continente" defaultValue="Continente" onChange={handleContinente}>
                <option value="Continente" disabled="disabled">Filtrar Continente</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Antarctic">Antarctic</option>
            </select>

            <select className="filter-select" name="activity" defaultValue="activity" onChange={handleActivities}>
                <option value="activity" disabled="disabled">Filtrar Actividad</option>
                {selectActividades.message ? (
                    <option key="no-data" value="null" disabled="disabled">{selectActividades.message}</option>
                ) : (
                    selectActividades.map((actividad) => (
                        <option key={actividad.id} value={actividad.Nombre}>{actividad.Nombre}</option>
                    ))
                )};
            </select>

            <select className="filter-select" name="alfabetic" defaultValue="alfabetic" onChange={handleAlfabetico}>
                <option value="alfabetic" disabled="disabled">Orden Alfabético...</option>
                <option value="desc">A-Z</option>
                <option value="asc">Z-A</option>
            </select>

            <select className="filter-select" name="population" defaultValue="population" onChange={handlePoblacion}>
                <option value="population" disabled="disabled">Cant. Poblacion...</option>
                <option value="desc">Mayor</option>
                <option value="asc">Menor</option>
            </select>
        </div>
    )
};

export default Filtros;