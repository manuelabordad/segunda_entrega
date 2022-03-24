const mongo = require("../models/index");

module.exports = {
	get: async (req, res) => {
		try {
			const products = await mongo.mongoose.getAll();
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
			const byid = await mongo.mongoose.getById(id);
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
			const update = await mongo.mongoose.updateById(id, body);
			res.status(200).send("producto actualizado");
		} catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
	},
	post: async (req, res) => {
		const { body } = req;
		try {
			const product = await mongo.mongoose.create(body);
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
			const product = await mongo.mongoose.deleteById(id);
			res.status(200).send("producto eliminado ");
		} catch (e) {
			console.log(e);
			res.status(500).send({
				error: e.message,
			});
		}
	},
};
