const mongo = require("../models/index");

module.exports = {
	get: async (req, res) => {
		try {
			const products = await mongo.mongooseP.getAll();
			res.send(products);
		} catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
	},
	getById: async (req, res) => {
		try {
			const { id } = req.params;
			const byid = await mongo.mongooseP.getById(id);
			res.send(byid);
		} catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
	},
	put: async (req, res) => {
		try {
			const { id, body } = req.params;
			const update = await mongo.mongooseP.updateById(id, body);
			res.status(200).send("producto actualizado");
		} catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
	},
	post: async (req, res) => {
		try {
			const { body } = req;
			const product = await mongo.mongooseP.create(body);
			res.status(200).send(product);
		} catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
	},
	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const product = await mongo.mongooseP.deleteById(id);
			res.status(200).send("producto eliminado ");
		} catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
	},
};
