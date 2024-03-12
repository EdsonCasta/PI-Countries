import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";

import Cards from "../../components/Cards/cards";
import SearchBar from "../../components/Navbar/searchBar";

const HomePage = () => {

    const dispatch = useDispatch();

    const allCountries = useSelector((state) => state.allCountries);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    return (
        <div>
            <p>estas en el home</p>
            <SearchBar />
            <Cards allCountries={allCountries} />
        </div>
    );
};

export default HomePage;