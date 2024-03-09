const { Country, Activity } = require("../db");

const countryById = async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findByPk(id, { include: [{ model: Activity, require: true}] });

        if(!country) return res.status(400).json({ error: 'Pais No Encontrado'});
        return res.status(200).json(country);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
    
module.exports = countryById;
    
 