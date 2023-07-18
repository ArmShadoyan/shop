const express = require("express");
const { Sequelize } = require("sequelize");
const config = require("./config");
const { init } = require("./models");
const users = require("./routes/users");

const app = express();

const PORT = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users",users)

init();

app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
})
