const curriculumService = require("../services/curriculumService");

exports.generateCurriculum = async (req, res) => {
  try {
    const { topic, level, duration } = req.body;

    // Basic validation
    if (!topic || !level || !duration) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const result = await curriculumService.generate(
      topic,
      level,
      duration
    );

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Controller Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to generate curriculum",
    });
  }
};