const { Country, Activity } = require('../db');


 const newActivity = async (req, res) => {
  try {

    const { ID, Nombre, Dificultad, Duracion, Temporada, countries } = req.body;

    if (![Nombre, Dificultad, Duracion, Temporada, countries ].every(Boolean)) {
      res.status(401).json({ message: 'Faltan datos' })
      return;
    }

    const response = await Activity.create({ ID, Nombre, Dificultad, Duracion, Temporada });

    for (const countryId of countries) {
      const country = await Country.findByPk(countryId);
      if (country) {
        await response.addCountry(country);
      }
    }
    
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error.message)
  }
};

module.exports = newActivity;