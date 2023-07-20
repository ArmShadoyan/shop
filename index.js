const express = require("express");
const { Sequelize } = require("sequelize");
const config = require("./config");
const { init } = require("./models");
const users = require("./routes/users");
const orders = require("./routes/orders")

const app = express();

const PORT = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/users",users);
app.use("/orders",orders)

init();

app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
})
