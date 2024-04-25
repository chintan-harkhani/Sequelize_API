const sequelize = require('../db/connection');
const User = require('../model/user.model');
const { Sequelize, Op, QueryTypes } = require("sequelize");
// create a new user
const CreatUser = async (reqBody) => {
    return User.create(reqBody)
}

// view data
const ViewUser = async () => {
    // return User.findAll({
    //     attributes: [['firstName' , 'first_name']]
    // });

    //  return User.findAll({
    //  attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'Count']]
    // });
    // return User.findAll({
    //     where: {
    //         id: {
    //           [Op.eq]: 12,
    //         },
    //       },
    // });
    return User.findAll()
}

//  user id find   
const findById = async (id) => {
    return User.findByPk(id);
}

// delete user
const deleteUser = async (id) => {
    return User.destroy({
        where: { id: id }
    });
}
const allUserDelete = async () => {
    return User.destroy({
        truncate: true,
    })
}
//update user
const updateUser = async (id, reqBody) => {
    return User.update(reqBody, {
        where: { id: id }
    })
}

//find email
const findemail = async (Email) => {
    return User.findOne({
        where: {
            Email: Email
        }
    })
}

//  COUTN DATA
const CountData = async () => {
    return User.findAndCountAll({})
}

//row query
const rowUser = async () => {
    // return sequelize.query("SELECT * FROM users", {
    //     type: QueryTypes.SELECT,

    // });

    // return sequelize.query('SELECT * FROM users WHERE id=?', {
    //     replacements: ['3'],
    //     type: QueryTypes.SELECT,
    // });
    // return sequelize.query('SELECT * FROM users WHERE id IN(:id)', {
    //     replacements: { id: ['1', '4'] },
    //     type: QueryTypes.SELECT,
    // })

    // return await sequelize.query('SELECT * FROM users WHERE firstName LIKE :search_name', {
    //     replacements: { search_name: 'chi%' },
    //     type: QueryTypes.SELECT,
    //   });
}
module.exports = {
    CreatUser,
    ViewUser,
    findById,
    deleteUser,
    updateUser,
    findemail,
    allUserDelete,
    CountData,
    rowUser
}