
/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  } else if(n===2 && n===3 && n===5 && n%2 !== 0 && n%3 !==0 && n%5 !== 0){
  	return true;
  }
  
  // TODO: return true if n is prime, false otherwise
};

/*else if (typeof n === 'number' && n/1 === n && n/n === 1 && n ===1 && n === 2 && n === 3 && n%2 !== 0 && n%3 !== 0 && n%5 !== 0 ){
  	console.log('this is value of n/1 and n/n', n/n)
  	return true;
else if (typeof n === 'number' && n/1 === n && n/n === 1 && n ===1 && n === 2 && n === 3 && n%2 !== 0 && n%3 !== 0 && n%5 !== 0 ){
  	console.log('this is value of n/1 and n/n', n/n)
  	return true;
*/