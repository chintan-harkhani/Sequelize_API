const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const UserSchema = sequelize.define("user",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user",
        }
    },

);

try {
    UserSchema.sync();
    console.log("Table is created");
} catch (error) {
    console.log("table is not creeated..." + error);
}

module.exports = UserSchema;
