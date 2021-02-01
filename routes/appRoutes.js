const express = require("express");
const upload = require("../services/upload");
const { uploadImage, getImages } = require("../controller/appController");

const router = express.Router();
router.get("/images", getImages);
router.post("/upload", upload.single("picture"), uploadImage);
module.exports = router;
