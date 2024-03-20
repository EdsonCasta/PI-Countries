import './paginationStyle.css';

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listPage } from "../../redux/actions";
import Cards from "../Cards/cards";

function Pagination() {

    const [page, setPage] = useState(1)
    const [array, setArray] = useState([])
    const [offset, setOffSet] = useState(0)
    const selectPaises = useSelector(state => state.allCountries);
    const selectPagina = useSelector(state => state.pagina);
    const dispatch = useDispatch();

    let max = Math.ceil(selectPaises.length / 10)

    useEffect(() => {
        if (page <= 5) {
            setOffSet(0);
        } else if (page <= 10) {
            setOffSet(5);
        } else if (page <= 15) {
            setOffSet(10);
        } else if (page <= 20) {
            setOffSet(15);
        } else if (page <= 25) {
            setOffSet(20);
        }
    }, [page])


    function menos(page) {
        if (page > 1) setPage(page - 1)
        if (page < 1) setPage(1)
    }
    function mas(page) {
        if (page < max) setPage(page + 1)
        if (page > max) setPage(max)
    }

    function showPagina(countries, page) {
        dispatch(listPage(countries, page))
    }

    function numPagina(item) {
        setPage(item)
    }

    useEffect(() => {
        setPage(1)
        function allPaginas(paginas) {
            const arreglo = []
            for (let i = 1; i <= paginas; i++) {
                arreglo.push(i)
            }
            setArray(arreglo)
        }
        allPaginas(max)
    }, [selectPaises])

    useEffect(() => {
        if (selectPaises.length > 0) {
            showPagina(selectPaises, page)
        }
    }, [selectPaises, page])

    return (
        <div className='paginado'>
            <Cards pagina={selectPagina} />
            <button onClick={() => { menos(page) }}>Anterior</button>
            <span>
                {array.length > 0 ? array.slice(offset, offset + 5).map((item) => (
                    <button className={item == page ? 'active' : ''} onClick={() => numPagina(item)} key={item}>{item}</button>)
                ) : '1'}
            </span>
            <button onClick={() => { mas(page) }}>Siguiente</button>
        </div>
    )
};

export default Pagination;
