import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
import { Link } from "react-router-dom";

const Activities = () => {

    const allActivities = useSelector(state => state.allActivities);
    const dispatch = useDispatch();

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
      dispatch(getActivities());
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
              ): allActivities.map((activity) => {
                return (
                  <tr key={activity.ID}>
                    <td>{activity.ID}</td>
                    <td>{activity.Nombre}</td>
                    <td>{activity.Duracion}</td>
                    <td>{activity.Dificultad}</td>
                    <td>{activity.Temporada}</td>
                    <td className='listCountries'>{activity.Countries.length <= 0 ? 'No hay paises' : activity.Countries.map((country, index) => {
                      return (
                      <p key={country.id || index}><Link to={`/home/${country.ID}`}><i>{country.Nombre}</i></Link></p>
                      )
                     })}</td>
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
