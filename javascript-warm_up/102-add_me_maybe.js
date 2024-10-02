#!/usr/bin/node
exports.addMeMaybe = function (value,fx){
 for ( i = (value - 1) ; i<value;i++ ){
   fx();  
 }
}