const { Country, Activity } = require('../db');


const newActivity = async (req, res) => {

  const { ID, Nombre, Dificultad, Duracion, Temporada, countries } = req.body;

  try {
    const myCountries = countries;

    if (![Nombre, Dificultad, Duracion, Temporada, countries].every(Boolean)) {
      return res.status(401).json({ message: 'Faltan datos' })
    }

    const response = await Activity.create({ ID, Nombre, Dificultad, Duracion, Temporada });

    for (const country of myCountries) {
      await response.addCountries(country);
    }

    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error.message)
  }
};

module.exports = newActivity;