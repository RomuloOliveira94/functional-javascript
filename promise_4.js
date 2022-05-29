function generateNumbers(min, max, time) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1) + min);
      resolve(random);
    }, time);
  });
}

//change comment
const generateVariousNumbers = () => {
  return Promise.all([
    generateNumbers(1, 50, 5000),
    generateNumbers(1, 50, 4000),
    generateNumbers(1, 50, 6000),
    generateNumbers(1, 50, 500),
    generateNumbers(1, 50, 200),
    generateNumbers(1, 50, 2000),
    generateNumbers(1, 50, 3000),
  ]);
};

generateVariousNumbers().then((data) => console.log(data));
