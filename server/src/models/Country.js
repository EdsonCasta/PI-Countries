const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImagenDeLaBandera:{
      type: DataTypes.STRING,
      allowNull: false
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Poblacion: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, { timestamps: false });
};
