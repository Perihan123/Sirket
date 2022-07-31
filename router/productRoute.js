const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router.route("/:companyId").post(productController.createProduct);
router.route("/").get(productController.getAllProduct);
module.exports = router;
