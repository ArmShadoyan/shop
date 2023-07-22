const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    return sequelize.define("Order", {
        user_id:{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        product:{
            type:Sequelize.STRING
        },

        quantity:{
            type:Sequelize.STRING
        },

        city:{
            type:Sequelize.STRING
        },

        street:{
            type:Sequelize.STRING
        },

        home:{
            type:Sequelize.STRING
        }       
    })
}


