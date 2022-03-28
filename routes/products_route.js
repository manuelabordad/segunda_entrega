const controller_prod = require("../controllers/controller_prod");
const controller = require("../controllers/controller_prod");
const router = require("express").Router();

router.get("/", controller_prod.get);
router.get("/:id", controller_prod.get);
router.post("/", controller_prod.post);
router.put("/:id", controller_prod.put);
router.delete("/:id", controller_prod.delete);

module.exports = router;
