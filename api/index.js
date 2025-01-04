const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Utility function to read the ayat.json file
function getAyatData() {
  try {
    const data = fs.readFileSync(path.join(__dirname, "ayat.json"), "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading ayat.json file:", error);
    return null;
  }
}

// Endpoint to get random Ayah
app.get("/api/ayat/json", (req, res) => {
  const ayatData = getAyatData();
  if (ayatData) {
    const randomIndex = Math.floor(Math.random() * ayatData.length);
    const randomAyah = ayatData[randomIndex];
    res.json(randomAyah);
  } else {
    res.status(500).json({ error: "Failed to read ayat.json" });
  }
});

// Endpoint to get random Ayah with image URL using Shields.io for dynamic image
app.get("/api/ayat/image", (req, res) => {
  const { lang, theme, type } = req.query;

  const ayatData = getAyatData();
  if (ayatData) {
    const randomIndex = Math.floor(Math.random() * ayatData.length);
    const randomAyah = ayatData[randomIndex];

    // Dynamic image URL using Shields.io
    const imageUrl = `https://img.shields.io/badge/${type}-${lang}-${
      theme === "dark" ? "black" : "yellow"
    }`;

    res.json({
      text: randomAyah.text,
      translation: randomAyah.translation,
      imageUrl: imageUrl,
    });
  } else {
    res.status(500).json({ error: "Failed to read ayat.json" });
  }
});

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
