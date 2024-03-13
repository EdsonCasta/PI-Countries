import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName, getCountries } from "../../redux/actions";
import { Link } from "react-router-dom";

import Cards from "../../components/Cards/cards";
import SearchBar from "../../components/Navbar/searchBar";

function HomePage() {

    const dispatch = useDispatch();

    const allCountries = useSelector((state) => state.allCountries);

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
        <div>
            <Link to={"/"}>
                <button>Inicio</button>
            </Link>
            <Link to={"/create"}>
                <button>Create Activity</button>
            </Link>
            <p>estas en el home</p>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <Cards allCountries={allCountries} />
        </div>
    );
};

export default HomePage;