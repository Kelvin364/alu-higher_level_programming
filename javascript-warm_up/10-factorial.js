#!/usr/bin/node
const myarg1 = parseInt(process.argv[2]);

function factorial (n) {
    if (n === 0 || n === 1 ){
        let fac = 1
        console.log(fac)
    }
    
    else {
        for ( i = n ; i > 0 ; i++){
            lfac *= (n*i);
            console.log(fac);
        }
    }
}