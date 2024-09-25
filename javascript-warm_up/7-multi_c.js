#!/usr/bin/node
const myarg = parseInt(process.argv[2]);
if (isNaN(myarg)) {
    console.log('Missing number of occurrences');
  } else {
    for ( let i=0 ; i<myarg; i++ )
    console.log('C is fun');
  }
