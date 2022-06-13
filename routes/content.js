const express = require("express");
const router = express.Router();
const fs = require("fs");

//Re-usable function to read our data file

function readContent() {
  const contentData = fs.readFileSync("./data.json");
  const parsedData = JSON.parse(contentData);
  return parsedData;
}

//get enpoint for all titles

router.get("/", (req, res) => {
  const content = readContent();

  const titles = content.map(article => {
    return article.title;
  });

  res.json(titles);
});

//get an individual article

router.get("/:articleName", (req, res) => {
  const content = readContent();

  const singleArticle = content.find(
    article => article.title.toLowerCase() === req.params.articleName.toLowerCase()
  );
  console.log(singleArticle);
  if (!singleArticle) {
    res.status(400).send("Error: not found");
  }

  res.json(singleArticle);
});

module.exports = router;
