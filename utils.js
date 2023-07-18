const bcrypt = require("bcrypt")


async function generateHash(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(8));
}

async function validPassword(password) {
    return bcrypt.compare(password, this.password);
}

module.exports = {
    generateHash,
    validPassword
}