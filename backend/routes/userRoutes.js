const express = require("express");
const {
    updateProfile, 
    deleteResume, 
    getPublicProfile,
} = require("../controllers/userController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();

// Protected routes
router.put("/profile",protect,updatetProfile);
router.post("/resume",protect,deleteResume);

// Publie route
router.get("/:id",getPublicProfile);

module.exports = router;