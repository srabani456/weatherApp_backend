const express = require("express");
const app = express();
const port = 3000;

// Simulated weather data
const weatherData = {
  Paris: { temperature: 22, description: "Sunny" },
  London: { temperature: 15, description: "Cloudy" },
  Tokyo: { temperature: 18, description: "Rainy" },
};

app.get("/weather", (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  const weather = weatherData[city];
  if (!weather) {
    return res.status(404).json({ error: "City not found" });
  }

  res.json(weather);
});

app.listen(port, () => {
  console.log(`Weather API running on http://localhost:${port}`);
});
