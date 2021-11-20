const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/email/send", userController.sendEmail);

module.exports = router;
