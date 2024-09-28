#!/usr/bin/node
const myarg1 = BigInt(process.argv[2]);

function factorial (n) {
  if (n === 0 || n === 1) {
    const fac = 1;
    console.log(fac);
  } else {
    let fac = 1;
    for (let i = n; i > 1; i--) {
      fac *= i;
    }
    return fac;
  }
}
console.log(factorial(myarg1));
