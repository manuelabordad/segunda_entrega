(async () => {
	console.log("IIFE");

	const admin = require("firebase-admin");
	const { getFirestore } = require("firebase-admin/firestore");

	const serviceAccount = require("./sdk.json");

	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://entrega-2.firebaseio.com",
	});

	const db = getFirestore();

	console.log("CONECTADO");

	const query = db.collection("products");
	const data = await query.get();
	let docs = data.docs;

	let id = 0;
	for (let d of docs) {
		console.log(d.data(), d.id);
		id = d.id;
	}

	const doc = query.doc("1");

	await doc.delete();

	console.log("TERMINADO");
})();
