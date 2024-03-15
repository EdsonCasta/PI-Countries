const { Activity } = require('../db');

const deleteActivities = async (req, res) => {

    try {
        const {Nombre} = req.params;
        const rows = await Activity.destroy({where : {Nombre}})

        if(rows){
            res.status(200).send('Actividad eliminada con exito')
        } else {
            res.status(404).send('Actividad no existe')
        }
    } catch (error) {
        res.json(error.message)
    }

};

module.exports = deleteActivities;