const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


async function generateHash(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(8));
}

async function compareHash(password,hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

async function validateSchema(schema,body) {
    const result = schema.validate(body);
    return result;
}

async function verifyToken(req,res,next){
    try{
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,"secret");
        const id = decoded.id;
        req.user = decoded;
        next();
    }catch(e){
        res.status(403).send("message:Forbidden")
        console.log(e);
    }
}

async function signToken(id,key) {
    const token = jwt.sign({ "id":id },key);
    return token;
}

module.exports = {
    generateHash,
    compareHash,
    validateSchema,
    verifyToken,
    signToken
}