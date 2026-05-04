const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { getEmployerAnalystics } = require("../controllers/analyticsController");

router.get("/overview", protect, getEmployerAnalystics);

module.exports = router;