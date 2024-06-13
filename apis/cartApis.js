//import db schema
const Cart = require('../model/Cart')

const add_to_cart = async (req, res) => {
    const reference = {
        u_name: req.body.u_name,
        p_id: req.body.p_id,
    }
    const data = {
        p_img: req.body.p_img,
        p_cost: req.body.p_cost
    }
    // check if product with the user already exists in cart
    const cart = await Cart.find(reference)
    // if product already exists, update the quantity else add new product
    if (cart.length > 0) {
        const updatedCart = await Cart.updateOne(reference, { $inc: { p_qty: 1 } })
        res.json({
            'success': 'Product quantity updated in cart',
            'cart': updatedCart
        })
    } else {
        const cart = new Cart({...reference, ...data, p_qty: 1})
        try {
            const savedCart = await cart.save()
            res.send({
                'success': 'Product added to cart',
                'cart': savedCart
            })
        } catch (error) {
            res.status(400).send({ "error": "Error occured in data insertion" })
        }
    }

}


const delete_from_cart = async (req, res) => {
    const reference = {
        u_name: req.body.u_name,
        p_id: req.body.p_id,
    }
    // check if product with the user already exists in cart
    const cart = await Cart.find(reference)
    // if product already exists, update the quantity else delete the product
    if (cart.length >= 1) {
        // store the value of p_qty in a variable
        const p_qty = cart[0].p_qty
        if(p_qty == 1)  {
            const deletedCart = await Cart.deleteOne(reference)
            res.json({
                'success': 'Product deleted from cart',
                'cart': deletedCart
            })
        } else {
            const updatedCart = await Cart.updateOne(reference, { $inc: { p_qty: -1 } })
            res.json({
                'success': 'Product quantity decreased in cart',
                'cart': updatedCart
            })
        }
    } else {
        res.json({
            'failure': 'Product not found in cart'
        })
    }
}
const cart_get = async(req,res)=>{
    try{
     const cart = await Cart.find()
     console.log('Data sent')
     res.json(cart)
    }
    catch(error){
     console.log('Fetch error :-',error)
     res.json({'message' : error})
    }
 }


module.exports = {
    add_to_cart,
    delete_from_cart,
    cart_get
}