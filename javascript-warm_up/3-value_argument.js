#!/usr/bin/node
const myarg = process.argv.slice(2) ;
if (isNaN(myarg))
{
    console.log('No argument')
}
else
{
  console.log(myarg)
}
