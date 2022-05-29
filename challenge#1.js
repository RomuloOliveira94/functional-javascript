//create a function call sum(3)(4)(5)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));
const sumAb = sum(2)(5);
console.log(sumAb(20));

//fn => 3*7
//fn => 3+7
//fn => 3-7
//calc (3)(7)(fn)

function calcs(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    };
  };
}

function multiply(a, b) {
  return a * b;
}
function sums(a, b) {
  return a + b;
}
function decrease(a, b) {
  return a - b;
}

const rMultiply = calcs(2)(5)(multiply);
const rSum = calcs(2)(5)(sums);
const rDecs = calcs(2)(5)(decrease);

console.log(rSum);
console.log(rDecs);
