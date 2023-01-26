const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

const connectDB = require("../config/db.js");
connectDB();

app.use(express.static("public"));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("../routes/files"));
app.use("/files", require("../routes/show"));
app.use("/files/download", require("../routes/download"));

app.listen(PORT, () => console.log(`server running on PORT:${PORT}`));

module.exports = app;
