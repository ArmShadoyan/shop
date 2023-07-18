let Sequelize = require('sequelize');


let {
    database,
    username,
    password,
    host,
    dialect
} = require("../config").db;

let sequelize = new Sequelize(database, username, password, {
    
    host,
    dialect,
    logging: false
});

let User = require("./tables/users")(sequelize);

function init(next) {

    sequelize.authenticate()
        .then(() => {

            console.log('Connection has been established successfully.');

            sequelize.sync({
                    alter: true,
                    // force:true
                })
                .then(() => {
                    console.log('sync ended');
                    // require('./seeder')();
                    if (next) next();
                })
                .catch(err => {
                    console.log("sync error");
                    console.log(err.message);
                });

        })
        .catch(err => {

            console.error('Unable to connect to the database:', err);

            setTimeout(() => {
                init(next)
            }, 1000);

        });

}

module.exports = {
    init,
    Op: Sequelize.Op,
    Sequelize,
    User
}