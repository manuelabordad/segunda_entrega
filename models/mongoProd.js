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
		this.model = mongoose.model("product", schema);
	}

	async create(obj) {
		const product = await this.model.create(obj);
		console.log("--------------------");
		console.log(JSON.stringify(product, null, 2));
		return product;
	}

	async getAll() {
		const products = await this.model.find();
		console.log(`productos en ecommerce: ${products.length}`);
		return products;
	}

	async getById(id) {
		const product = await this.model.findById(id);
		return product;
	}

	async updateById(id, newP) {
		const newProd = await this.model.findByIdAndUpdate(id, newP);
		await this.model.save();
		return newProd;
	}

	async deleteById(id) {
		const product = await this.model.findByIdAndDelete(id);
		const newArray = await this.model.find();
		return newArray;
	}
}

module.exports = new Product();
