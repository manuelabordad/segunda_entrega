const mongoose = require("mongoose");

class Cart {
	constructor() {
		const schema = new mongoose.Schema({
			nombre: String,
			productos: [String],
			timestamp: { type: Number, default: Date.now() },
		});
		this.model = mongoose.model("cart", schema);
	}
	async getCart(id) {
		const cart = await this.model.find(id);
		return cart;
	}
	async saveCart(cart) {
		const cart = await this.model.create(cart);
		console.log(JSON.stringify(product, null, 2));
		return cart;
	}

	async addProduct(id, body) {
		const product = await this.model.findById(id).save(body);
		console.log("saved!");
		return product;
	}
	async deleteC(id) {
		const cart = await this.model.findByIdAndDelete(id);
	}

	async deleteById(id, id_prod) {
		const cart = await this.model.findById(id);
		const productIndex = cart.productos.findIndex(
			(product) => product.id == id_prod
		);
		cart.productos.splice(productIndex);
		return cart;
	}
}

module.exports = new Cart();
