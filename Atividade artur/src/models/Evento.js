const { DataTypes } = require("sequelize");
const sequelize = require ("../config/config");


const Evento = sequelize.define('Evento',{

    Nome:{
        type:DataTypes.STRING,
        allowNull:false

    },

    Date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    localizacao: {
        type: DataTypes.STRING,
        allowNull: false
    },

     

});

module.exports = Evento;