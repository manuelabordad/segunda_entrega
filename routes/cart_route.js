const controller_cart = require("../controllers/controller_cart");
const controller = require("../controllers/controller_cart");
const router = require("express").Router();

router.get("/:id", controller_cart.get);
router.post("/:id/productos", controller_cart.postP);
router.post("/", controller_cart.post);
router.delete("/:id/productos/:id_prod", controller_cart.deleteP);
router.delete("/:id", controller_cart.delete);
module.exports = router;
