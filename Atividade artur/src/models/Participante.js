const { DataTypes } = require("sequelize");
const sequelize = require ("../config/config")

const Evento = require("./Evento");

const Participante = sequelize.define('participante',{

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    EventoId: {
        type:DataTypes.INTEGER,
        references:{
            model: Evento,
            key:'id',
        }

    }

     

});

module.exports = Participante;