"use strict"
/**
 * Implement the solution in this function
 *
 * @param {number} n Output goes from 1 to n
 * @returns {(number|string)[]} An array containing all numbers and strings
 */
function fizzbuzz (n) {
    let ary=[];
for(let i=1;i<=n;i++){
    if(i%3===0 || i%5===0){
    if(i%3==0 && i%5!=0)
    ary.push("Fizz");
    else if(i%5==0 && i%3!=0)
    ary.push("Buzz");
    else if(i%3==0 && i%5==0)
    ary.push("FizzBuzz");
    }
    else
    ary.push(i); 
}
return ary;
}
