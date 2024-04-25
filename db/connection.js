const { Sequelize } = require("sequelize");
const dbname = 'users';
const dbuser = 'root';
const dbpassword = '12345';

const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
})
sequelize.authenticate().then((data) => {
    console.log("SuucessFully Connected...");
}).catch((err) => {
    console.log("Error in connecting to database...", err);
});


module.exports = sequelize;