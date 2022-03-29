const { Console } = require("console");
const express = require("express");
const mongoose = require("mongoose");

const { HOSTNAME, SCHEMA, DATABASE, DBPORT } = require("./config/index");
const middleware = require("./middleware/admin");
const productsRouter = require("./routes/productsRoute");
const cartRouter = require("./routes/cartRoute");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose
	.connect(
		"mongodb+srv://manuelaBordaDiaz:Hyugagomez8@cluster0.gms6i.mongodb.net/ecommerce?retryWrites=true&w=majority"
	)
	.then(() => {
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));

		app.use("/api/productos", middleware, productsRouter);
		app.use("api/cart", middleware, cartRouter);
		app.listen(PORT, () => console.log("server has started"));
	})
	.catch((err) => console.log("error on mongo ", err));
