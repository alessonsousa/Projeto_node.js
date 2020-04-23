// conecxão com banco de bados Mysql
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', '92905827',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}