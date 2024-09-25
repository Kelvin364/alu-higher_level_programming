#!/usr/bin/node
const myarg = parseInt(process.argv[2]);
if (isNaN(myarg)) {
  console.log('Missing size');
}
 else {
   for (let j =0 ; j < myarg; j++)
       console.log(j *('*'));
}
