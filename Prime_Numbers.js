/**
 * Implement the solution in this function
 *
 * @param {number} n Examine this number
 * @returns {boolean} True if n is prime and false otherwise
 */
function isPrime (n) {
if(n<2)
return false;
for(i=2;i<Math.sqrt(n)-1;i++){
    if(n%i==0)
    return false;
}
return true;
}