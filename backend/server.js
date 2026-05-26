const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

// Serve React build
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
