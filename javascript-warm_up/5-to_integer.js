#!/usr/bin/node
const myarg = parseInt(process.argv[2]);
if (myarg === undefined) {
  console.log('Not a number');
} else {
  console.log('my number:'+ ' '+ myarg);
}
