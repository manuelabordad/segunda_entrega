const mongooseP = require("./mongoProd");
const mongooseC = require("./mongoCart");
const firebase = require("./firebase_model");
const local = require("./local_model");

module.exports = {
	mongooseP,
	mongooseC,
	firebase,
	local,
};
