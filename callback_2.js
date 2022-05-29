const fs = require("fs");

const path = require("path");

const caminho = path.join(__dirname, "data.txt");

function showContent(_, content) {
  console.log(content.toString());
}

fs.readFile(caminho, showContent);
fs.readFile(caminho, (_, content) => console.log(content.toString()));
