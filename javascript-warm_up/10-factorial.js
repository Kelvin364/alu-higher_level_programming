#!/usr/bin/node
const myarg1 = parseInt(process.argv[2]);

function factorial (n) {
    if (n === 0 || n === 1 ){
        const fac = 1
        console.log(fac)
    }
    
    else {
        for ( i = n ; i > 0 ; i--){
           let fac;
           fac *= (n*i);
            console.log(fac);
        }
    }
}
factorial(myarg1);