const { Sequelize } = require ("sequelize")

const sequelize = new Sequelize ('bancoArtur', 'root', 'root', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

