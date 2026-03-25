
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// 🔹 App Init
const app = express();

// 🔹 Middlewares
app.use(cors());
app.use(express.json()); 

// 🔹 Health Check Route (IMPORTANT for deployment)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 🔹 Routes Import
const curriculumRoutes = require("./routes/curriculumRoutes");

// 🔹 Routes Use
app.use("/api/curriculum", curriculumRoutes);

// 🔹 Global Error Handler (basic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// 🔹 Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});