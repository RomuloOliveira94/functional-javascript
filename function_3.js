//arrow function
const afofim = () => console.log('afofas');
afofim()

const saudas = name => `Eae ${name}, blz?`
console.log(saudas("Afofado"));

const sum = (...numbers) => {
  let total = 0
  for(let n of numbers){
    total += n
  }
  return total
}

console.log(sum(1,2,3,4))
console.log(sum(1,2,3,4,6,7))
console.log(sum(1,2,3,4,5,6,7,8,9,10))