import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Form() {

    const selectPaises = useSelector(state => state.allCountries);

    selectPaises.sort((a, b) => {
        return a.Nombre.localeCompare(b.Nombre);
    });

    const [input, setInput] = useState({
        Nombre: "",
        Dificultad: 1,
        Duracion: 1,
        Temporada: "",
        countries: [],
    });

    function handleChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

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
            await axios.post('http://localhost:3001/activities', { ...input, countries: input.countries });

            setInput({
                Nombre: "",
                Dificultad: 1,
                Duracion: 1,
                Temporada: "",
                countries: []
            });

            alert('Actividad creada exitosamente');
        } catch (error) {
            console.error('Error al enviar la solicitud al servidor:', error);
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Nombre">Nombre</label>
                    <input name="Nombre" value={input.Nombre} onChange={handleChange} />
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
                <div>
                    <label htmlFor="Duracion">Duracion</label>
                    <input name="Duracion" value={input.Duracion} onChange={handleChange} />
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
                            <span>Aun no hay paises seleccionados</span>
                        ) : (
                            input.countries.map((country, index) => (
                                <p key={index}>{country}<button onClick={deletePais} id={country} className='iconClose'>✘</button></p>
                            )))
                        }
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;