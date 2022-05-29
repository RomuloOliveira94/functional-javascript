function generateNumbers(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    const random = parseInt(Math.random() * (max - min + 1) + min);
    resolve(random);
  });
}

generateNumbers(10, 50)
.then(num => num * 10)
.then(numX10 => `the number is ${numX10}`)
.then(console.log)
