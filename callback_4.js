const cart = [
  { name: "pen", qt: 10, price: 7.99 },
  { name: "printer", qt: 0, price: 667.99 },
  { name: "book", qt: 4, price: 27.99 },
  { name: "pencil", qt: 3, price: 5.99 },
  { name: "scissor", qt: 1, price: 17.99 },
];
const getNames = (item) => item.name;
const qtBiggerThanZero = (item) => item.qt > 0;
const qtBiggerThanHundred = (item) => item.qt >= 1000;

const filterQt = cart.filter(qtBiggerThanZero).map(getNames);

console.log(filterQt);

Array.prototype.myFilter = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const filterQt2 = cart.myFilter(qtBiggerThanZero).map(getNames);

console.log(filterQt2);
