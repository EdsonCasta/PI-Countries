import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";

const Activities = () => {

    const allActivities = useSelector(state => state.allActivities);
//   const [paisesSelect, setPaisesSelect] = useState([])
    const dispatch = useDispatch();

    // async function getPaises() {
    //     try {
    //       const { data } = await axios(URLcountries)
    //       const array = data.map((country) => {
    //         return {
    //           name: country.Nombre,
    //           id: country.ID
    //         }
    //       })
    //       setPaisesSelect(array)
    //     } catch (error) {
    //       console.log(error.response.data.error)
    //     }
    //   }

    async function deleteActivity(Nombre) {
        try {
          const confirmacion = confirm('Estas apunto de eliminar esta actividad de forma permanente')
          if (confirmacion) {
            await axios.delete(`http://localhost:3001/activities/${Nombre}`)
            window.location.reload()
          }
        } catch (error) {
          console.log(error.message)
        }
      };

    useEffect(() => {
        dispatch(getActivities())
        // if (allActivities.length === 0) {
        //     dispatch(actividad())
        //   }
        //   getPaises()
    },[])

  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Duracion</th>
              <th>Dificultad</th>
              <th>Temporada</th>
              <th>Paises</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {allActivities.message ? (<tr><td colSpan='6'>{allActivities.message}</td></tr>
              ): allActivities.map((activity, id) => {
                return (
                  <tr key={id}>
                    <td>{activity.ID}</td>
                    <td>{activity.Nombre}</td>
                    <td>{activity.Duracion}</td>
                    <td>{activity.Dificultad}</td>
                    <td>{activity.Temporada}</td>
                    {/* <td className='listCountries'>{activity.countries.length <= 0 ? 'No hay paises' : activity.countries.map((country) => {
                        console.log(country);
                      return (
                        <p key={country.id}><Link to={`/detail/${country.id}`}><i>{country.Nombre}</i></Link><button onClick={() => { deletePais(activity.Nombre, country.id) }} id={country.id} className='iconClose'>✘</button></p>
                      )
                    })}</td> */}
                    <td><button onClick={() => { deleteActivity(activity.Nombre) }} className='btn-delete'>Borrar</button></td>
                  </tr>
                )
              })}
          </tbody>
        </table>
    </div>
  );
};

export default Activities;
