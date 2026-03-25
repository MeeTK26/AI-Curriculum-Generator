const express = require("express");
const router = express.Router();

const {
  generateCurriculum,
} = require("../controllers/curriculumController");

// POST /api/curriculum/generate
router.post("/generate", generateCurriculum);

module.exports = router;