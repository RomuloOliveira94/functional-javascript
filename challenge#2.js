const cart = [
  { name: "pen", qt: 10, price: 7.99, fragile: true },
  { name: "printer", qt: 1, price: 667.99, fragile: true },
  { name: "book", qt: 4, price: 27.99, fragile: false },
  { name: "pencil", qt: 3, price: 5.99, fragile: false },
  { name: "scissor", qt: 1, price: 17.99, fragile: true },
];

//1. pegar apenas os que são frageis
//2. pegar quantidade * preço -> total
//3. média dos totais.

const fragile = (item) => item.fragile;

const totalItens = (item) => item.qt * item.price;

const fragileItens = cart.filter(fragile);

const totalFragileItens = fragileItens.map(totalItens);

const getTotalFragile = totalFragileItens.reduce(
  (acc, item) => {
    const newQt = acc.qt + 1;
    const newTotal = acc.total + item;
    return {
      qt: newQt,
      total: newTotal,
      average: newTotal / newQt,
    };
  },
  { qt: 0, total: 0, average: 0 }
);

console.log(getTotalFragile.average);
