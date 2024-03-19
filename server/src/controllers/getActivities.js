const { Country, Activity } = require('../db');

const touristActivities = async (req, res) => {
  try {

    const allActivities = await Activity.findAll({
      include: [
        {
          model: Country,
          required: true
        }
      ]
    });
    
    if (allActivities.length === 0) {
      return res.status(200).json({ message: 'No hay actividades' });
    }
    res.status(200).json(allActivities);

  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = touristActivities;
