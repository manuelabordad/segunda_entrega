const mongo = require("../models/index");
module.exports={
    get:(req, res)=>{
        try{
            const {id}= req
            const cart= await mongo.mongooseC.getCart(id)
            res.status(200).send(cart)
        }catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}


    },
    post:(req, res)=>{ 
        try{
            const {body}= req
            const cart = await mongo.mongooseC.saveCart(body);
            res.status(200).send(cart);
        }catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}

    },
    delete:(req, res)=>{
        try{
            const{id}=req
            const deleted=await mongo.mongooseC.deleteC(id)
            res.status(200).send("carrito eliminado")
        }catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
    },
    postP:(req, res)=>{
        try{
            const {id, body}= req
            const newP= await mongo.mongooseC.addProduct(id, body)
            res.status(200).send(newP)
        }catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
    },
    deleteP:(req, res )=>{
        try{
            const {id, id_prod}=req
            const deleted=await mongo.mongooseC.deleteById(id, id_prod)
            res.status(200).send("producto eliminado del carrito")
        }catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
    }
}