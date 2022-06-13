const express = require("express");
const app = express();
// const router = express.Router();
const contentRoutes = require("./routes/content");
const cors = require("cors");
// const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 8082;

// app.use(cors({ origin: "*" }));
app.use(cors());

app.use(express.json());

app.use("/content", contentRoutes);

app.listen(PORT, () => {
  console.log("Your server is running on port" + PORT);
});
