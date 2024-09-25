#!/usr/bin/node
const myarg = process.argv [2,6] ;
if (isNaN(myarg))
{
    console.log('No argument')
}
else
{
  console.log(myarg)
}
