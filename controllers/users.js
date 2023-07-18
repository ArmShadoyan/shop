const { User } = require("../models");
const { generateHash } = require("../utils");

async function createUser (req,res) {
    try{
        const params = req.body;
        let {
            firstName,
            lastName,
            email,
            password
        } = params;

         password = await generateHash(password);

         const user = await User.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
        res.send(user)
        // await User.sync();
    }catch(e){
        console.log(e);
    }
}

async function login (req,res){
    try{
        let user = await User.findOne({
            where: {firstName:"Armen"}
        });
        res.send(user)
    }catch(e){
        console.log(e);
    }
}

async function deleteUser (req,res) {
    try{
        const user = await User.findAll({
            where: {firstName:"Armen"}
        })
        await user.destory();

        res.send("user was successfuly deleted");
    }catch(e) {
        console.log(e);
    }
}

module.exports = {
    createUser,
    login,
    deleteUser
}