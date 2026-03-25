exports.buildPrompt = (topic, level, duration) => {
  return `
You are an AI that generates structured learning roadmaps.

Generate a curriculum for the following:

Topic: ${topic}
Level: ${level}
Duration: ${duration}

IMPORTANT RULES:
- Output MUST be valid JSON
- Do NOT repeat this prompt
- Do NOT copy example values
- Generate real content
- topics must be simple strings
- Include realistic module names

OUTPUT FORMAT (example structure only, DO NOT copy values):

{
  "title": "Example Title",
  "duration": "Example Duration",
  "level": "Example Level",
  "modules": [
    {
      "moduleTitle": "Example Module",
      "week": 1,
      "topics": ["Example Topic"],
      "projects": ["Example Project"],
      "resources": [
        {
          "type": "Video",
          "title": "Example Resource",
          "link": "https://example.com"
        }
      ]
    }
  ]
}

Now generate the REAL curriculum.
Return ONLY JSON.
`;
};