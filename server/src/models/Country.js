const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primeryKey: true,
      allowNull: false
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
      allowNull: false
    },
    Subregión: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Area: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { timestamps: false });
};

// ID (Código de tres letras). *
// Nombre. *
// Imagen de la bandera. *
// Continente. *
// Capital. *
// Subregión.
// Área.
// Población. *