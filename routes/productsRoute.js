const controllerProd = require("../controllers/controllerProd");
const router = require("express").Router();

router.get("/", controllerProd.get);
router.get("/:id", controllerProd.get);
router.post("/", controllerProd.post);
router.put("/:id", controllerProd.put);
router.delete("/:id", controllerProd.delete);

module.exports = router;
