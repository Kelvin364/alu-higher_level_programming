#!/usr/bin/node
const myarg = process.argv.length - 2;
if (myarg === 1) {
  console.log('Argument found');
} else if (myarg > 0) {
  console.log('Arguments found');
} else {
  console.log('No argument');
}
