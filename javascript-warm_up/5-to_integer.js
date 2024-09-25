#!/usr/bin/node
const myarg = int(process.argv[2]);
if (myarg === undefined) {
  console.log('Not a number');
} else {
  console.log('my number:'+ ''+ myarg);
}
