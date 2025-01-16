const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "project", "dist")));

app.get("/build/version", (req, res) => {
  res.send("1.0.0");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "project", "dist", "index.html"));
});

const PORT = 3020;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
