const express = require("express");
const { getRevised, postRevised } = require("../controllers/userInfo");

const router = express.Router();

router.get("/getRevised", getRevised);
router.post("/postRevised", postRevised);

module.exports = router;
