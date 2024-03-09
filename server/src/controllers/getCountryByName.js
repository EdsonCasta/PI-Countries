const { Country, Activity } = require('../db');
const { Op } = require('sequelize');


async function countryByName(req, res) {
  try {
    const { Nombre } = req.query;
console.log('Nombre', Nombre);
    const countries = await Country.findAll({
      where: {
        Nombre: {
          [Op.iLike]: `%${Nombre}%`
        }
      },
      include: [
        {
          model: Activity,
          require: true
        }
      ]
    })
    if (countries.length === 0) {
      res.status(404).json({ error: 'No se encontro ningun resultado' })
      return;
    }
    res.status(200).json(countries);

  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = countryByName ;
