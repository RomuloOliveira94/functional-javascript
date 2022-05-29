const olaAfofa = function () {
  console.log("i am a param");
};

//function as a param
function execAnything(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

execAnything(3);
execAnything(olaAfofa);

//return a function from an another function
function power(base, exp) {
  return Math.pow(base, exp);
}

const bits8 = power(2, 8);
console.log(bits8);

const power2 = (base) => (exp) => Math.pow(base, exp);


const bits8_ = power2(2)(8);
console.log(bits8_);

const power3 = power2(2);

console.log(power3(8));
