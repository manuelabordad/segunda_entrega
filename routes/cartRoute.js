const controllerCart = require("../controllers/controllercart");
const router = require("express").Router();

router.get("/:id", controllerCart.get);
router.post("/:id/productos", controllerCart.postP);
router.post("/", controllerCart.post);
router.delete("/:id/productos/:id_prod", controllerCart.deleteP);
router.delete("/:id", controllerCart.delete);
module.exports = router;
