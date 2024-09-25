#!/usr/bin/node
const myarg = parseInt(process.argv[2]);
if (isNaN(myarg)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < myarg; i++) 
    console.log('*')
    { for (let j =0 ; j < i; j++)
       console.log('*')
   }
}
