const { User, Order } = require("../models");
const { generateHash, compareHash, validateSchema, signToken } = require("../utils");
const { userSchema } = require("../validators/users");

async function createUser (req,res) {
    try{
        const params = req.body;
        
        const result = await validateSchema(userSchema,params);
        const { value, error } = result;
        
        if(error){
            res.status(400).send(`${error}`)
        }else{
            let {
                firstName,
                lastName,
                email,
                password
            } = params;
    
            const isContains = await User.findOne({
                where:{email:email}
            });
    
            if(!isContains){
                password = await generateHash(password); 
        
                const user = await User.create({
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password
                })
                
                res.send(user)
            }else{
                res.status(409).send("email adress already exists");
            }
        }
        
    }catch(e){
        console.log(e);
    }
}

async function login (req,res){
    try{
        
        const loggedUser = req.body;
        const findedUser = await User.findOne({
            where: {email:loggedUser.email}
        });
        
        if(!findedUser){
            res.status(401).send("invalid email or password,please try again");
            return;
        }

        const auth = await compareHash(loggedUser.password,findedUser.password);
        
        if(auth){
            const token = await signToken(findedUser.id,"secret");

            res.status(200).send(token);
        }else{
            res.status(401).send("invalid email or password, please try again");
        }

    }catch(e){
        console.log(e);
    }
}

async function getUserInfo (req,res) {
    const id = req.user.id;

    const user = await User.findOne({
       where:{id:id},
       include: {
         model: Order 
       }
    })

    res.send(user);
} 


module.exports = {
    createUser,
    login,
    getUserInfo
}