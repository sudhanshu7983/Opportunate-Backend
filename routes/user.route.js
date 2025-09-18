import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js"; // ✅ spelling fix

const router = express.Router();

// Auth routes
router.post("/register", singleUpload, register);
router.post("/login", login);
router.get("/logout", logout);

// Profile routes
router.post("/profile/update", isAuthenticated, singleUpload, updateProfile);

export default router;
