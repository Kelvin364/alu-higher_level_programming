#!/usr/bin/node
const myarg1 = process.argv[2];
const myarg2 = process.argv[3];
if (myarg1 === undefined) {
  console.log('No argument');
} else {
  console.log(myarg1 + 'is' + myarg2);
}
