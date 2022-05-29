const cart = [
  { name: "pen", qt: 10, price: 7.99 },
  { name: "printer", qt: 0, price: 667.99 },
  { name: "book", qt: 4, price: 27.99 },
  { name: "pencil", qt: 3, price: 5.99 },
  { name: "scissor", qt: 1, price: 17.99 },
];

const mappingValues = (item) => item.qt * item.price;

const getTotals = (acc, item) => acc + item;

const totalCart = cart.map(mappingValues).reduce(getTotals);

console.log(totalCart.toFixed(2));

//criação do reduce

Array.prototype.myReduce = function (fn, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};


const totalCart2 = cart.map(mappingValues).myReduce(getTotals);

console.log(totalCart2.toFixed(2));
