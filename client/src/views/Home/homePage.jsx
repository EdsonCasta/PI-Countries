import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName, getCountries } from "../../redux/actions";
import { Link } from "react-router-dom";

import SearchBar from "../../components/Navbar/searchBar";
import Filtros from "../../components/Filtros/filtros";
import Pagination from "../../components/Pagination/pagination";

import "./homeStyle.css";

function HomePage() {

    const dispatch = useDispatch();

    const [searchString, setSearchString] = useState("");

    function handleChange(event) {
        event.preventDefault();
        setSearchString(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getByName(searchString));
    };

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    return (
        <div className="home">
            <div className="header">
                <div className="inicio">
                    <Link to={"/"}>
                        <button>Inicio</button>
                    </Link>
                </div>
                <div className="createActivity">
                    <Link to={"/create"}>
                        <button className="create-activity-btn" >Actividades</button>
                    </Link>
                </div>
            <Filtros />
            </div>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <h1 className="home-title">Paises Del Mundo</h1>
            <Pagination />
        </div>
    );
};

export default HomePage;