const express = require("express");
const app = express();
const contentRoutes = require("./routes/content");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 8082;

app.use(cors());

app.use(express.json());

app.use("/content", contentRoutes);

app.listen(PORT, () => {
  console.log("Your server is running on port" + PORT);
});
