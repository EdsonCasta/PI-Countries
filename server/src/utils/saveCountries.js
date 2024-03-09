const axios = require('axios');
const { Country } = require('../db')

const saveCountries = async () => {
  try {
    const { data } = await axios("http://localhost:5000/countries");

    for (let country of data) {
      Country.create({
        ID: country.cca3,
        Nombre: country.name.common,
        ImagenDeLaBandera: country.flags.svg,
        Continente: country.region,
        Capital: country.capital?.[0],
        Subregion: country.subregion,
        Area: country.area,
        Poblacion: country.population
      });
    }
    console.log('Datos guardados exitosamente');
  } catch (error) {
    console.log('Error al guardar los datos', error)
  }
};

module.exports = saveCountries;

