const { Order, User } = require("../models");
const order = require("../models/tables/order");
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


async function changeOrder (req,res) {

        try{

            const params = req.body;
            const order_id = params.id;

            const order = await Order.findOne({ 
                where:{id:order_id}
            });

            if(order){
                order.update(params);
                res.send(order);
            }else{
                res.send("there is no such order");
            }

        }catch(e){
            console.log(e,"11111111");
        }
}


async function deleteOrder (req,res) {

  try{
    const params = req.body;
    const order_id = params.id;

  
    console.log(order_id);
    await Order.destroy({
        where:{id:order_id}
    })

  }catch(e){
    console.log(e);
  }

}

async function getOrders (req,res) {
  
    const order = await Order.findAll();

    res.send(order);

}


module.exports = {
    createOrder,
    getOrders,
    changeOrder,
    deleteOrder
}