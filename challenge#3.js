const fs = require("fs");

const path = require("path");

const caminho = path.join(__dirname, "data.txt");

const readFilesWithPromise = (caminho) => {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, content) => {
      resolve(content.toString());
    });
  });
};

readFilesWithPromise(caminho).then(console.log);
