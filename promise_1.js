const firstName = (name) => name[0];
const firstLetter = (letter) => letter[0];
const lowerCaseLetter = (letter) => letter.toLowerCase();

const p = new Promise(function (resolve) {
  resolve(["fofo", "cyber", "doca", "romin"]);
});

p.then(firstName).then(firstLetter).then(lowerCaseLetter).then(console.log);
