const { Country, Activity } = require('../db');

const allCountries = async (req, res) => {
    try {
        const response = await Country.findAll({
            include: [
                {
                    model: Activity,
                    require: true
                }
            ]
        });
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = allCountries;