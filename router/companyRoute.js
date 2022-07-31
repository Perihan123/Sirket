const express = require("express");
const companyController = require("../controller/companyController");
const router = express.Router();

router.route("/create").post(companyController.createCompany);
router.route("/:id").get(companyController.getProductsByCompanyId);
module.exports = router;
