const express = require("express");
const { login, register, authorize } = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/authorize", authorize);

module.exports = router;
