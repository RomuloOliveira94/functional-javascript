const numbers = [1, 2, 3, 6, 5, 45, 6];

const double = (n) => n * 2;

const resD = numbers.map(double);

console.log(resD);

const names = ["ana", "nald", "cyber", "doca", "romin"];

const fistLetter = names.map((name) => name[0]);

console.log(fistLetter);

const cart = [
  { name: "pen", qt: 10, price: 7.99 },
  { name: "printer", qt: 1, price: 667.99 },
  { name: "book", qt: 4, price: 27.99 },
  { name: "pencil", qt: 3, price: 5.99 },
  { name: "scissor", qt: 1, price: 17.99 },
];

const namesProd = (product) => product.name;

const namesCart = cart.map(namesProd);

console.log(namesCart);

const totalsProd = (prod) => prod.qt * prod.price;

const totalOfCart = cart.map(totalsProd);
console.log(totalOfCart);

Array.prototype.myMap = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const mapped = fn(this[i], i, this);
    newArray.push(mapped);
  }
  return newArray;
};

const totalOfCart2 = cart.myMap(totalsProd);

console.log(totalOfCart2)
