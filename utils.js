const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


async function generateHash(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(8));
}

async function validPassword(password,hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

async function validSchema(schema,body) {
    const result = schema.validate(body);
    return result;
}

async function verifyToken(req,res,next){
    try{
        console.log(req.headers);
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,"secret");
        const id = decoded.id;
        req.body.id = id;
        console.log(decoded);
        next();
    }catch(e){
        res.status(403).send("message:Forbidden")
        console.log(e);
    }
}

module.exports = {
    generateHash,
    validPassword,
    validSchema,
    verifyToken
}