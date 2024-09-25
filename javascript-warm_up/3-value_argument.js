#!/usr/bin/node
let myarg = process.argv[2] ;
if (myarg = undefined)
{
    console.log('No argument');
}
else
{
  console.log(myarg);
}
