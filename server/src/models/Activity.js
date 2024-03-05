const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Duracion: {
            type: DataTypes.TIME,
            allowNull: false
        },
        Temporada: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
};