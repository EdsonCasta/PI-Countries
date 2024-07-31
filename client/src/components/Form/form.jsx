import './formStyle.css';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getActivities, getCountries } from '../../redux/actions';

function Form() {

    const selectPaises = useSelector(state => state.allCountries);
    const dispatch = useDispatch();

    selectPaises.sort((a, b) => {
        return a.Nombre.localeCompare(b.Nombre);
    });

    const [input, setInput] = useState({
        Nombre: "",
        Dificultad: 1,
        Duracion: "",
        Temporada: "",
        countries: [],
    });

    const [error, setError] = useState({
        Nombre: "",
        Dificultad: 1,
        Duracion: "Debe ingresar un formato HH:MM",
        Temporada: "",
        countries: [],
    });

    const validate = (input) => {
        let errors = {};

        if (!input.Nombre.trim()) {
            errors.Nombre = "El nombre es requerido";
        } else if (!/^[a-zA-Z\s]+$/.test(input.Nombre)) {
            errors.Nombre = "El nombre solo debe contener letras";
        }

        if (input.Dificultad < 1 || input.Dificultad > 5) {
            errors.Dificultad = "La dificultad debe estar entre 1 y 5";
        }

        if (!input.Duracion.trim()) {
            errors.Duracion = "La duración debe tener el formato HH:MM";
        } else if (!/^\d{1,2}:\d{2}$/.test(input.Duracion)) {
            errors.Duracion = "debe ingresar el formato valido";
        }

        if (!input.Temporada.trim()) {
            errors.Temporada = "La temporada es requerida";
        }

        return errors;
    };

    function handleChange(event) {
        const { name, value } = event.target;

        setInput({
            ...input,
            [name]: value
        });

        if (name !== 'countries') {
            const fieldErrors = validate({ ...input, [name]: value });

            setError(prevError => ({
                ...prevError,
                [name]: fieldErrors[name] || '' 
            }));
        }
    };

    function handleCountries(event) {
        if (input.countries.includes(event.target.value)) {
            alert('Este pais ya existe')
            return;
        }
        setInput((state) => ({
            ...state,
            countries: [...state.countries, event.target.value]
        }))
    }

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    function deletePais(event) {
        const id = event.target.id
        setInput((state) => ({
            ...state,
            countries: state.countries.filter((country) => country !== id)
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (input.countries.length === 0) {
            alert('Selecciona al menos un país');
            return;
        }
        try {
            await axios.post('https://countries-4778.onrender.com//activities', { ...input, countries: input.countries });
            setInput({
                Nombre: "",
                Dificultad: 1,
                Duracion: 1,
                Temporada: "",
                countries: []
            });
            dispatch(getActivities());

            alert('Actividad creada exitosamente');
        } catch (error) {
            console.error('Error al enviar la solicitud al servidor:', error);
            alert(error.response.data.message);
        }
    }

    return (
        <div className='modalContainer'>
            <form onSubmit={handleSubmit}>
                <div className='Nombre'>
                    <label htmlFor="Nombre">Nombre :</label>
                    <input name="Nombre" value={input.Nombre} onChange={handleChange} className={error.Nombre ? 'error-field' : ''} />
                    {error.Nombre && <span className="error-message">{error.Nombre}</span>}
                </div>
                <div>
                    <select name="Dificultad" defaultValue='Dificultad' onChange={handleChange}>
                        <option value="Dificultad" disabled='disabled'>Dificultad...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='Nombre'>
                    <label htmlFor="Duracion">Duracion :</label>
                    <input name="Duracion" value={input.Duracion} onChange={handleChange} className={error.Duracion ? 'error-field' : ''} />
                    {error.Duracion && <span className="error-message">{error.Duracion}</span>}
                </div>
                <div>
                    <select name="Temporada" defaultValue='Temporada' onChange={handleChange}>
                        <option value="Temporada" disabled='disabled'>Temporada...</option>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                </div>
                <div className='selectPaises'>
                    <label htmlFor="countries">
                        <select name="countries" defaultValue='all' onChange={handleCountries}>
                            <option value="all" disabled='disabled'>Pais...</option>
                            {selectPaises.map((country) => (
                                <option key={country.ID} value={country.ID}>{country.Nombre}</option>
                            ))}
                        </select>
                    </label>
                    <div className='listaPaises'>
                        {input.countries.length === 0 ? (
                            <span style={{ margin: '0px auto' }}>Aun no hay paises seleccionados</span>
                        ) : (
                            input.countries.map((country, index) => (
                                <p key={index}>{country}<button onClick={deletePais} id={country} className='iconClose'>✘</button></p>
                            )))
                        }
                    </div>
                </div>
                <div className='botones'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;