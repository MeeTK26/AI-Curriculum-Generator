const axios = require("axios");
const { buildPrompt } = require("../utils/promptBuilder");

// ✅ ADD THIS FUNCTION
const safeJSONParse = (text) => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return null;
  }
};

exports.generateCurriculum = async (topic, level, duration) => {
  try {
    const prompt = buildPrompt(topic, level, duration);

    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "phi",
        prompt: prompt,
        stream: false
      }
    );

    let text = response.data.response;

    console.log("RAW OUTPUT:\n", text);

    // Clean
    text = text.replace(/```json|```/g, "").trim();

    // Extract JSON
    const extractJSON = (text) => {
      let bracketCount = 0;
      let jsonStart = -1;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === "{") {
          if (jsonStart === -1) jsonStart = i;
          bracketCount++;
        } else if (text[i] === "}") {
          bracketCount--;
          if (bracketCount === 0) {
            return text.substring(jsonStart, i + 1);
          }
        }
      }

      return null;
    };
    const extracted = extractJSON(text);

    if (extracted) {
      text = extracted;
    }

    let parsed = safeJSONParse(text);

    // Try parsing
    // parsed = safeJSONParse(text);

    // console.log("My parsed:" + parsed);
    console.log("Parsed JSON:", JSON.stringify(parsed, null, 2));


    // 🔥 If parsing fails → fix common issues
    if (!parsed) {
      console.log("Attempting auto-fix...");

      // Fix missing commas
      text = text.replace(/]\s*"/g, '], "');
      text = text.replace(/}\s*"/g, '}, "');

      // 🔥 NEW: Remove trailing commas
      text = text.replace(/,\s*}/g, '}');
      text = text.replace(/,\s*]/g, ']');

      // 🔥 Fix broken quotes in links
      text = text.replace(/"link":\s*"([^"]+)(?=\s*})/g, (match, p1) => {
        if (!p1.endsWith('"')) {
          return `"link": "${p1}"`;
        }
        return match;
      });

      parsed = safeJSONParse(text);
    }

    // ❌ Still fails → fallback
    if (!parsed) {
      console.log("Using fallback data...");

      return {
        title: topic + " Curriculum",
        duration,
        level,
        modules: [
          {
            moduleTitle: "Introduction",
            week: 1,
            topics: ["Basics"],
            projects: ["Mini Project"],
            resources: []
          }
        ]
      };
    }

    return parsed;

  } catch (error) {
    console.error("Ollama Error:", error.message);
    throw new Error("AI_GENERATION_FAILED");
  }
};