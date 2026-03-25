const aiService = require("./aiService");

exports.generate = async (topic, level, duration) => {
  try {
    const curriculum = await aiService.generateCurriculum(
      topic,
      level,
      duration
    );

    return curriculum;
  } catch (error) {
    console.error("Service Error:", error.message);
    throw error;
  }
};