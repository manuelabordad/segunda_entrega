const mongoose = require("mongoose");

class Product {
	constructor() {
		const schema = new mongoose.Schema({
			nombre: String,
			descripcion: String,
			codigo: String,
			url: String,
			precio: Number,
			stock: { type: Number, default: 0 },
			timestamp: { type: Number, default: Date.now() },
		});

		// modelo
		// representacion en JS de nuestra collection en mongo
		this.model = mongoose.model("product", schema);
	}

	async create(obj) {
		// db.product.insertOne({}) -> mongoshell
		const product = await this.model.create(obj);
		console.log("--------------------");
		console.log(JSON.stringify(product, null, 2));
		return product;
	}

	// orderBy valor por default es string vacio
	async getAll(orderBy = "", search = "") {}

	getById(id) {}

	update() {}

	delete() {}
}

module.exports = new Product();
