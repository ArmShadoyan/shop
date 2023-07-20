const { Order } = require("../models");
const { validateSchema } = require("../utils");
const orderSchema = require("../validators/orders");



async function createOrder (req,res) {

    try{

        let params = req.body;
        console.log(params);
        
        const result = await validateSchema(orderSchema,params);
        const { value, error } = result;

        if(error){
            res.status(400).send(`${error}`)
        }else{
            
            let {
                product,
                quantity,
                city,
                street,
                home,
            } = params;
    
            const order = await Order.create({
                product:product,
                quantity:quantity,
                city:city,
                street:street,
                home:home,
                user_id: req.user.id
            })

            res.send(order)
        }
    }catch(e){
        console.log(e);
    }

}

async function getOrders (req,res) {
    // res.send(req.body)
    const id = req.body.id;

    const order = await Order.findAll()

    res.send(order)

}
module.exports = {
    createOrder,
    getOrders
}