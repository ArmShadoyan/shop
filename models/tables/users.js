const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("User", {
        firstName:{
            type:Sequelize.STRING
        },
    
        lastName:{
            type:Sequelize.STRING
        },
        
        email:{
            type:Sequelize.STRING
        },

        password:{
            type:Sequelize.STRING
        }
    })
}

