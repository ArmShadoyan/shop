const express = require("express");
const { Sequelize } = require("sequelize");
const config = require("./config");
const { init } = require("./models");

const app = express();

const PORT = config.port;

// async function createUser () {
    
//     const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
// }

// createUser();

init();

app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
})

