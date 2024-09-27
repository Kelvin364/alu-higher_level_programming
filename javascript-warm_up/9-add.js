#!/usr/bin/node
const myarg1 = parseInt(process.argv[2]);
const myarg2 = parseInt(process.argv[3]);

function add (a, b) {
  const sum = a + b;
  console.log(sum);
}
add(myarg1, myarg2);
