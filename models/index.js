const mongooseP = require("./mongo_prod");
const mongooseC = require("./mongo_cart");
const firebase = require("./firebase_model");
const local = require("./local_model");

module.exports = {
	mongooseP,
	mongooseC,
	firebase,
	local,
};
