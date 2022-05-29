const exec = (fn, a, b) => {
  return fn(a, b);
};

const sumTerminal = (a, b) => a + b;
const subTerminal = (a, b) => a - b;

console.log(exec(sumTerminal, 56, 38));
console.log(exec(subTerminal, 182, 27));

const cb = () => console.log("executando....");
setInterval(cb, 1000);
