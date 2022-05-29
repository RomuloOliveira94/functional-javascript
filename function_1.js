//function declaration
function ola() {
  console.log("Olá afofas");
}

ola();

//function expression
const oi = function () {
  console.log("Ola Manin");
};

oi();

//functions params
function sum(a, b = 0) {
  return a+b
}

const result = sum(4, 8);
const result2 = sum(4);
const result3 = sum(4, 5, 6, 8);

console.log(result);
console.log(result2);
console.log(result3);
