const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

const connectDB = require("./config/db.js");
connectDB();

// cors

const corsOption = {
  origin: process.env.ALLOWED_CLIENTS.split("."),
};

app.use(cors(corsOption));

app.use(express.static("public"));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => console.log(`server running on PORT:${PORT}`));
